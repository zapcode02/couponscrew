#!/usr/bin/env node
/**
 * IndexNow submitter.
 *
 * POSTs a list of URLs to the shared IndexNow endpoint, which forwards to
 * every participating engine (Bing, Yandex, Naver, Seznam.cz, Yep — not
 * Google, which does not participate in IndexNow).
 *
 * There is no CMS/database in this project — coupon and deal data lives in
 * hardcoded TypeScript arrays that a human edits and redeploys. So this is
 * a manual/CI step run after a real content change, not an automatic hook
 * fired by a publish event:
 *
 *   npm run indexnow:submit -- https://www.couponscrew.com/stores/amazon-coupon-code
 *
 * Spec: https://www.indexnow.org/documentation
 */

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const HOST = 'www.couponscrew.com'
const KEY = '59a8f9cdb957fa9468d816eac0f45ebf'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

function normalizedHost(value: string): string {
  try {
    return new URL(value.includes('://') ? value : `//${value}`, 'http://placeholder').hostname.toLowerCase().replace(/\.$/, '')
  } catch {
    return value.toLowerCase()
  }
}

function belongsToHost(url: string, host: string): boolean {
  const parsedHost = normalizedHost(url)
  const declaredHost = normalizedHost(host)
  return parsedHost === declaredHost || parsedHost.endsWith(`.${declaredHost}`)
}

interface SubmitResult {
  ok: boolean
  statusCode?: number
  submitted: number
  endpoint?: string
  engines?: string[]
  error?: string
  examples?: string[]
  responseBodyPreview?: string
}

async function verifyKeyPublished(): Promise<{ ok: boolean; error?: string; statusCode?: number }> {
  let res: Response
  try {
    res = await fetch(KEY_LOCATION)
  } catch (err) {
    return { ok: false, error: `fetch failed: ${err instanceof Error ? err.message : String(err)}` }
  }
  if (res.status !== 200) {
    return { ok: false, statusCode: res.status, error: 'keyLocation returned non-200' }
  }
  const text = (await res.text()).trim()
  if (text !== KEY) {
    return { ok: false, statusCode: 200, error: 'keyLocation contents do not match key' }
  }
  return { ok: true, statusCode: 200 }
}

async function submit(urls: string[]): Promise<SubmitResult> {
  if (urls.length === 0) {
    return { ok: false, error: 'empty url list', submitted: 0 }
  }
  if (urls.length > 10000) {
    return { ok: false, error: 'IndexNow spec caps batch at 10000 URLs', submitted: 0 }
  }
  if (KEY.length < 8 || KEY.length > 128) {
    return { ok: false, error: 'key must be 8-128 chars per IndexNow spec', submitted: 0 }
  }

  const bad = urls.filter((u) => !belongsToHost(u, HOST))
  if (bad.length > 0) {
    return {
      ok: false,
      error: `${bad.length} URLs don't belong to host "${HOST}"`,
      examples: bad.slice(0, 3),
      submitted: 0,
    }
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  let res: Response
  try {
    res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    return { ok: false, error: `HTTP error: ${err instanceof Error ? err.message : String(err)}`, submitted: 0 }
  }

  const bodyText = await res.text()
  return {
    ok: res.status === 200 || res.status === 202,
    statusCode: res.status,
    submitted: urls.length,
    endpoint: INDEXNOW_ENDPOINT,
    engines: ['Bing', 'Yandex', 'Naver', 'Seznam.cz', 'Yep'],
    responseBodyPreview: bodyText.slice(0, 200),
  }
}

async function main() {
  const args = process.argv.slice(2)
  const verifyOnly = args.includes('--verify-only')
  const urls = args.filter((a) => a !== '--verify-only')

  const verify = await verifyKeyPublished()
  if (!verify.ok) {
    console.error(`Pre-flight failed: ${verify.error}`)
    process.exit(1)
  }
  console.log('Key verification: OK')

  if (verifyOnly) {
    return
  }

  if (urls.length === 0) {
    console.error('Error: pass at least one URL to submit, e.g.:')
    console.error('  npm run indexnow:submit -- https://www.couponscrew.com/stores/amazon-coupon-code')
    process.exit(2)
  }

  const result = await submit(urls)
  const status = result.ok ? 'OK' : 'FAIL'
  console.log(`IndexNow: ${status} (status=${result.statusCode})`)
  console.log(`  Submitted: ${result.submitted} URLs to ${result.endpoint}`)
  if (result.engines) {
    console.log(`  Engines:   ${result.engines.join(', ')}`)
  }
  if (!result.ok) {
    console.error(`  Error: ${result.error ?? result.responseBodyPreview}`)
    process.exit(1)
  }
}

main()
