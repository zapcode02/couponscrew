import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const HOST = 'www.couponscrew.com';
const KEY = '59a8f9cdb957fa9468d816eac0f45ebf';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function normalizedHost(value: string): string {
  try {
    return new URL(value.includes('://') ? value : `//${value}`, 'http://placeholder').hostname
      .toLowerCase()
      .replace(/\.$/, '');
  } catch {
    return value.toLowerCase();
  }
}

function belongsToHost(url: string, host: string): boolean {
  const parsedHost = normalizedHost(url);
  const declaredHost = normalizedHost(host);
  return parsedHost === declaredHost || parsedHost.endsWith(`.${declaredHost}`);
}

// Manually triggered submission endpoint — this project has no CMS/database,
// so there is no real "publish" event to hook automatically. Gated behind
// INDEXNOW_ADMIN_TOKEN so this isn't an open POST endpoint anyone can hit to
// spend the site's IndexNow quota or spam third-party search engines.
export async function POST(request: NextRequest) {
  const adminToken = process.env.INDEXNOW_ADMIN_TOKEN;
  if (!adminToken) {
    return NextResponse.json({ error: 'INDEXNOW_ADMIN_TOKEN not configured' }, { status: 500 });
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${adminToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { urls?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!Array.isArray(body.urls) || body.urls.some((u) => typeof u !== 'string')) {
    return NextResponse.json({ error: 'Body must be { "urls": string[] }' }, { status: 400 });
  }
  const urls = body.urls as string[];

  if (urls.length === 0) {
    return NextResponse.json({ error: 'urls array is empty' }, { status: 400 });
  }
  if (urls.length > 10000) {
    return NextResponse.json({ error: 'IndexNow spec caps batch at 10000 URLs' }, { status: 400 });
  }

  const bad = urls.filter((u) => !belongsToHost(u, HOST));
  if (bad.length > 0) {
    return NextResponse.json(
      { error: `${bad.length} URLs don't belong to host "${HOST}"`, examples: bad.slice(0, 3) },
      { status: 400 }
    );
  }

  const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };

  let indexNowResponse: Response;
  try {
    indexNowResponse = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    return NextResponse.json(
      { error: `IndexNow request failed: ${err instanceof Error ? err.message : String(err)}` },
      { status: 502 }
    );
  }

  const ok = indexNowResponse.status === 200 || indexNowResponse.status === 202;
  return NextResponse.json(
    {
      ok,
      statusCode: indexNowResponse.status,
      submitted: urls.length,
      endpoint: INDEXNOW_ENDPOINT,
      engines: ['Bing', 'Yandex', 'Naver', 'Seznam.cz', 'Yep'],
    },
    { status: ok ? 200 : 502 }
  );
}
