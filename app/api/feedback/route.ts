import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const ADMIN_EMAIL = 'Couponscrew@gmail.com';
const FROM_EMAIL = process.env.SMTP_FROM || 'Couponscrew <Couponscrew@gmail.com>';

const GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbykK-geICNUao9fjn2ic1GZHIW2214H9a3nZMBzBG_BK3YB_CAZDyBxH2DODfPpCXqR/exec';

const STAR_MAP: Record<number, string> = {
  1: '⭐ (1/5 — Poor)',
  2: '⭐⭐ (2/5 — Fair)',
  3: '⭐⭐⭐ (3/5 — Good)',
  4: '⭐⭐⭐⭐ (4/5 — Very Good)',
  5: '⭐⭐⭐⭐⭐ (5/5 — Excellent)',
};

// ── Admin HTML Email ───────────────────────────────────────────────────────
function adminEmailHtml(data: {
  name: string;
  email: string;
  topic: string;
  rating: number;
  pageUrl: string;
  message: string;
  canContact: boolean;
}): string {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Topic', data.topic],
    ['Rating', STAR_MAP[data.rating] ?? `${data.rating}/5`],
    ['Page URL', data.pageUrl || 'Not provided'],
    ['Can Contact?', data.canContact ? '✅ Yes' : '❌ No'],
  ];

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Feedback Submission</title></head>
<body style="margin:0;padding:0;background:#F8F8FF;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8FF;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#5B4FBE 0%,#7C3AED 100%);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
          <div style="font-size:36px;margin-bottom:8px;">❤️</div>
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">New Feedback Received!</h1>
          <p style="margin:8px 0 0;color:#C4BBFF;font-size:14px;">Couponscrew — Feedback Form Submission</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:32px 40px;border-left:1px solid #E8E8F0;border-right:1px solid #E8E8F0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${rows.map(([label, value]) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #F0EEFF;">
                <span style="font-size:12px;font-weight:600;color:#8B8BAA;text-transform:uppercase;letter-spacing:0.5px;">${label}</span><br>
                <span style="font-size:15px;color:#1A1A2E;font-weight:500;margin-top:2px;display:inline-block;">${value}</span>
              </td>
            </tr>`).join('')}

            <!-- Message -->
            <tr><td style="padding:16px 0 0;">
              <span style="font-size:12px;font-weight:600;color:#8B8BAA;text-transform:uppercase;letter-spacing:0.5px;">Message</span>
              <div style="margin-top:8px;background:#F8F8FF;border-left:3px solid #5B4FBE;border-radius:4px;padding:14px 16px;font-size:15px;color:#1A1A2E;line-height:1.6;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#F0EEFF;border-radius:0 0 16px 16px;padding:20px 40px;border:1px solid #E8E8F0;border-top:none;text-align:center;">
          <p style="margin:0;font-size:12px;color:#8B8BAA;">This feedback was submitted via <strong>couponscrew.com/feedback</strong></p>
          ${data.canContact ? `<p style="margin:6px 0 0;font-size:12px;color:#8B8BAA;">User has agreed to be contacted at <a href="mailto:${data.email}" style="color:#5B4FBE;">${data.email}</a></p>` : ''}
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── User Confirmation HTML Email ───────────────────────────────────────────
function userConfirmationHtml(data: { name: string; topic: string }): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>We've received your feedback!</title></head>
<body style="margin:0;padding:0;background:#F8F8FF;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8FF;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#5B4FBE 0%,#7C3AED 100%);border-radius:16px 16px 0 0;padding:40px;text-align:center;">
          <div style="font-size:48px;margin-bottom:12px;">🙏</div>
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">Thank You, ${data.name}!</h1>
          <p style="margin:10px 0 0;color:#C4BBFF;font-size:14px;line-height:1.6;">We've received your feedback and truly appreciate you taking the time to share your thoughts with us.</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 40px;border-left:1px solid #E8E8F0;border-right:1px solid #E8E8F0;">
          <p style="margin:0 0 20px;font-size:15px;color:#4A4A6A;line-height:1.7;">
            Hi <strong style="color:#1A1A2E;">${data.name}</strong>,<br><br>
            Your feedback has been successfully submitted to the Couponscrew team. We read every single message and use it to improve our platform for everyone.
          </p>

          <!-- Summary Box -->
          <div style="background:#F8F8FF;border:1px solid #E8E8F0;border-radius:12px;padding:20px 24px;margin:24px 0;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#8B8BAA;text-transform:uppercase;letter-spacing:0.5px;">Your Feedback Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:6px 0;font-size:13px;color:#8B8BAA;width:120px;">Topic</td>
                <td style="padding:6px 0;font-size:14px;color:#1A1A2E;font-weight:600;">${data.topic}</td>
              </tr>
            </table>
          </div>

          <p style="margin:0 0 16px;font-size:14px;color:#4A4A6A;line-height:1.7;">
            If you have any urgent questions or need immediate assistance, feel free to reach out to us directly at
            <a href="mailto:Couponscrew@gmail.com" style="color:#5B4FBE;font-weight:600;text-decoration:none;">Couponscrew@gmail.com</a>.
          </p>

          <p style="margin:0;font-size:14px;color:#4A4A6A;line-height:1.7;">
            Meanwhile, explore the latest verified deals and coupon codes at
            <a href="https://couponscrew.com" style="color:#5B4FBE;font-weight:600;text-decoration:none;">couponscrew.com</a>.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#F0EEFF;border-radius:0 0 16px 16px;padding:24px 40px;border:1px solid #E8E8F0;border-top:none;text-align:center;">
          <p style="margin:0;font-size:13px;font-weight:600;color:#5B4FBE;">Couponscrew Team</p>
          <p style="margin:6px 0 0;font-size:12px;color:#8B8BAA;">
            <a href="mailto:Couponscrew@gmail.com" style="color:#5B4FBE;text-decoration:none;">Couponscrew@gmail.com</a>
            &nbsp;·&nbsp;
            <a href="https://couponscrew.com" style="color:#5B4FBE;text-decoration:none;">couponscrew.com</a>
          </p>
          <p style="margin:10px 0 0;font-size:11px;color:#AAAAC0;">You received this because you submitted feedback at couponscrew.com/feedback.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── POST Handler ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, topic, rating, pageUrl, message, canContact } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !topic?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const ratingNum = Number(rating);
    if (!ratingNum || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({ error: 'Please provide a valid star rating.' }, { status: 400 });
    }

    // Run all async tasks in parallel
    await Promise.all([
      // 1. Admin email
      transporter.sendMail({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        replyTo: email.trim(),
        subject: `[Couponscrew Feedback] ${topic} — ${ratingNum}★ from ${name}`,
        html: adminEmailHtml({
          name: name.trim(),
          email: email.trim(),
          topic,
          rating: ratingNum,
          pageUrl: pageUrl?.trim() || '',
          message: message.trim(),
          canContact: Boolean(canContact),
        }),
      }),
      // 2. User confirmation email
      transporter.sendMail({
        from: FROM_EMAIL,
        to: email.trim(),
        subject: `We've received your feedback — Couponscrew`,
        html: userConfirmationHtml({ name: name.trim(), topic }),
      }),
      // 3. Save to Google Sheet
      fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim(),
          topic,
          rating: ratingNum,
          source: 'feedback-form',
          timestamp: new Date().toISOString(),
        }),
        redirect: 'follow',
      }).catch(() => {
        // Sheet logging is non-critical — don't fail the whole request
        console.warn('Feedback: Google Sheet logging failed silently.');
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Feedback API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
