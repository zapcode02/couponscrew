import { NextRequest, NextResponse } from 'next/server';

// CSP violation logging endpoint. The site's Content-Security-Policy header
// is currently Report-Only (see next.config.mjs) — this endpoint exists so
// real violation data starts getting collected during that observation
// window, before any decision is made about enforcing the policy.
//
// Accepts both report formats browsers actually send:
//   - the older report-uri format: { "csp-report": { ... } }
//   - the newer Reporting API (report-to) format: [{ type: "csp-violation", body: { ... } }, ...]
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const reports = Array.isArray(body) ? body : [body];
  for (const report of reports) {
    console.warn('[CSP violation]', JSON.stringify(report));
  }

  return new NextResponse(null, { status: 204 });
}
