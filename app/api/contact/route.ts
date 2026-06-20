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

const ADMIN_EMAIL = 'support@couponscrew.com';
const FROM_EMAIL = process.env.SMTP_FROM || 'Couponscrew <support@couponscrew.com>';

function adminEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Contact Form Submission</title></head>
<body style="margin:0;padding:0;background:#F8F8FF;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8FF;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#5B4FBE;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">New Contact Form Submission</h1>
          <p style="margin:8px 0 0;color:#C4BBFF;font-size:14px;">Couponscrew Admin Notification</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:32px 40px;border-left:1px solid #E8E8F0;border-right:1px solid #E8E8F0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              ['Name', data.name],
              ['Email', data.email],
              ['Phone', data.phone || 'Not provided'],
              ['Category', data.category],
            ].map(([label, value]) => `
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
          <p style="margin:0;font-size:12px;color:#8B8BAA;">This message was sent from the contact form at <strong>couponscrew.com</strong></p>
          <p style="margin:6px 0 0;font-size:12px;color:#8B8BAA;">Reply directly to <a href="mailto:${data.email}" style="color:#5B4FBE;">${data.email}</a></p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function userConfirmationHtml(data: { name: string; category: string }): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>We received your message</title></head>
<body style="margin:0;padding:0;background:#F8F8FF;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8FF;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#5B4FBE;border-radius:16px 16px 0 0;padding:40px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">Thanks for reaching out, ${data.name}!</h1>
          <p style="margin:10px 0 0;color:#C4BBFF;font-size:14px;line-height:1.5;">We have received your message and will get back to you shortly.</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:32px 40px;border-left:1px solid #E8E8F0;border-right:1px solid #E8E8F0;">
          <p style="margin:0 0 20px;font-size:15px;color:#4A4A6A;line-height:1.7;">
            Hi <strong style="color:#1A1A2E;">${data.name}</strong>,<br><br>
            Someone on our team will read your message and reply within <strong style="color:#5B4FBE;">2 hours</strong>. Real person, real reply.
          </p>

          <!-- Summary Box -->
          <div style="background:#F8F8FF;border:1px solid #E8E8F0;border-radius:12px;padding:20px 24px;margin:24px 0;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#8B8BAA;text-transform:uppercase;letter-spacing:0.5px;">Your Submission</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:6px 0;font-size:13px;color:#8B8BAA;width:100px;">Category</td>
                <td style="padding:6px 0;font-size:14px;color:#1A1A2E;font-weight:600;">${data.category}</td>
              </tr>
            </table>
          </div>

          <p style="margin:0;font-size:14px;color:#4A4A6A;line-height:1.7;">
            In the meantime, explore verified deals at
            <a href="https://couponscrew.com" style="color:#5B4FBE;font-weight:600;text-decoration:none;">couponscrew.com</a>.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#F0EEFF;border-radius:0 0 16px 16px;padding:24px 40px;border:1px solid #E8E8F0;border-top:none;text-align:center;">
          <p style="margin:0;font-size:13px;font-weight:600;color:#5B4FBE;">Couponscrew Support Team</p>
          <p style="margin:6px 0 0;font-size:12px;color:#8B8BAA;">
            <a href="mailto:support@couponscrew.com" style="color:#5B4FBE;text-decoration:none;">support@couponscrew.com</a>
            &nbsp;·&nbsp;
            <a href="https://couponscrew.com" style="color:#5B4FBE;text-decoration:none;">couponscrew.com</a>
          </p>
          <p style="margin:10px 0 0;font-size:11px;color:#AAAAC0;">You received this because you submitted the contact form at couponscrew.com.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, category, message } = body;

    if (!name || !email || !category || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    await Promise.all([
      transporter.sendMail({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `[Couponscrew] New Contact: ${category}`,
        html: adminEmailHtml({ name, email, phone, category, message }),
      }),
      transporter.sendMail({
        from: FROM_EMAIL,
        to: email,
        subject: `We received your message — Couponscrew Support`,
        html: userConfirmationHtml({ name, category }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
