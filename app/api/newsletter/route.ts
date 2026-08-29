import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbykK-geICNUao9fjn2ic1GZHIW2214H9a3nZMBzBG_BK3YB_CAZDyBxH2DODfPpCXqR/exec';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
      redirect: 'follow',
    });

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.error || 'Sheet append failed');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
