import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbx3OC9tnWubVepme4UmzbcYYLJjnHM2Pqt1M83sPFf2oESLJGcBAhhJYvKCNkSmPEWu/exec';

const MAX_QUERY_LENGTH = 300;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = typeof body.query === 'string' ? body.query.trim() : '';

    if (!query || query.length > MAX_QUERY_LENGTH) {
      return NextResponse.json({ error: 'A valid query is required.' }, { status: 400 });
    }

    const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, timestamp: new Date().toISOString() }),
      redirect: 'follow',
    });

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.error || 'Sheet append failed');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Chatbot-miss API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
