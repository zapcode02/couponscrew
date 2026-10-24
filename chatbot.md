# CouponsCrew Chatbot — "Offers Assistant"

## What this is
A floating chat-bubble widget (site-wide, mounted in `app/layout.tsx`) where visitors
type a store name or category and get matching store offers back in a conversational
UI. It is a **matching-based bot, not an LLM** — no AI API, no API cost, no
hallucination risk. Under the hood it's the same lookup the Navbar search already
does against `STORES_DATA` (`src/data/stores.ts`), just presented as chat.

## Why it exists
Built to make the site "AI-ready" for Google AI Overviews / answer engines, and to
give users a faster, more natural way to find a store's offers than scrolling the
`/stores` grid.

## How matching works
`src/components/Chatbot/matchQuery.ts` takes the raw typed text and checks it against
`STORES_DATA[].name` and `STORES_DATA[].category` (lowercase substring match, same
style as the Navbar's existing `results` `useMemo`). Returns 0, 1, or many stores.
On match → renders store card(s) (logo, name, discount label, link to the store page).
On no match → shows a fixed fallback message and silently logs the query.

## Where unmatched queries go
A brand-new Google Sheet, separate from the existing newsletter/feedback sheet.
Columns: `query | timestamp | status | response`. A new row lands with
`status = "New"`. The site owner reviews it periodically — either adds the missing
store, or fills in `response` manually for that query.

Logging flow: `Chatbot.tsx` → POST `app/api/chatbot-miss/route.ts` → Google Apps
Script web-app URL → Sheet. Same pattern as `app/api/newsletter/route.ts`, fully
independent deployment (does not touch the existing Apps Script/Sheet used for
newsletter and feedback).

**Live Apps Script web-app URL** (deployed 24 Oct 2026 — fresh "Chatbot Webhook"
project, replacing two earlier broken deployments from a different project whose
`doPost` was never actually live):
`https://script.google.com/macros/s/AKfycbx3OC9tnWubVepme4UmzbcYYLJjnHM2Pqt1M83sPFf2oESLJGcBAhhJYvKCNkSmPEWu/exec`

Apps Script source (`doPost`, bound to the Sheet, deployed as Web app / Execute as Me
/ Access: Anyone):
```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var query = (data.query || '').toString().trim();
    var timestamp = data.timestamp || new Date().toISOString();

    if (!query) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'query is required' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([query, timestamp, 'New', '']);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Files
- `src/components/Chatbot/Chatbot.tsx` — floating bubble + chat panel UI
- `src/components/Chatbot/matchQuery.ts` — pure matching function against `STORES_DATA`
- `app/api/chatbot-miss/route.ts` — proxies unmatched queries to the Apps Script URL
- `app/layout.tsx` — mounts `<Chatbot />` alongside `<FloatingContactWidget />`

## Explicitly not done
- No LLM/AI API — decided deliberately to keep this zero-cost and hallucination-free.
- No separate "Stores" sheet/tab — `STORES_DATA` is the only source of truth.
- No changes to the existing newsletter/feedback Apps Script or Sheet.
- No Content Indexing API usage (that's a PWA offline-content API, not an SEO/indexing
  mechanism — confirmed not relevant to this bot during planning).

## Possible future follow-ups (not started)
- Promote to LLM-backed if matching-only proves too rigid for real user phrasing.
- Expand scope beyond stores/categories to blog content.
- Add a small admin view to read `status`/`response` from the Sheet back into the bot,
  so manually-answered queries get served automatically next time.
