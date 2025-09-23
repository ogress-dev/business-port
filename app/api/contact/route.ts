import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type Body = {
  email?: string;
  name?: string;
  services?: string;
  budget?: string;
  timeline?: string;
  details?: string;
};

async function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  // Primary: explicit SMTP_* variables
  if (host && port && user && pass) {
    return nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  }

  // Secondary: fallback to EMAIL_USER / EMAIL_PASSWORD (legacy .env format)
  const emailUserRaw = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASSWORD;
  if (emailUserRaw && emailPass) {
    // sanitize obvious typos like double @@ -> @
    const emailUser = emailUserRaw.replace('@@', '@');
    // Infer host/port for common providers (Gmail) if not provided
    let inferredHost = process.env.EMAIL_HOST;
    let inferredPort = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : undefined;
    if (!inferredHost) {
      if (emailUser.toLowerCase().includes('@gmail.com')) {
        inferredHost = 'smtp.gmail.com';
        inferredPort = inferredPort || 587;
      }
    }

    if (inferredHost && inferredPort) {
      return nodemailer.createTransport({ host: inferredHost, port: inferredPort, secure: inferredPort === 465, auth: { user: emailUser, pass: emailPass } });
    }

    // If we couldn't infer host/port but have credentials, still attempt a commonly used host
    return nodemailer.createTransport({ host: 'smtp.gmail.com', port: 587, secure: false, auth: { user: emailUser, pass: emailPass } });
  }

  // Final fallback: Ethereal for local/dev testing
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    const transporter = await createTransport();

    const to = 'ogress638@gmail.com';

    const html = `
      <p>You have a new contact form submission:</p>
      <ul>
        <li><strong>Name:</strong> ${body.name || '—'}</li>
        <li><strong>Email:</strong> ${body.email || '—'}</li>
        <li><strong>Services:</strong> ${body.services || '—'}</li>
        <li><strong>Budget:</strong> ${body.budget || '—'}</li>
        <li><strong>Timeline:</strong> ${body.timeline || '—'}</li>
      </ul>
      <p><strong>Details:</strong></p>
      <p>${(body.details || '—').replace(/\n/g, '<br/>')}</p>
    `;

    const info = await transporter.sendMail({
      from: body.name ? `${body.name} <${body.email || 'no-reply@example.com'}>` : (body.email || 'no-reply@example.com'),
      to,
      subject: 'New contact form submission',
      html,
    });

    const getTestMessageUrl = (nodemailer as unknown as { getTestMessageUrl?: (info: unknown) => string | false }).getTestMessageUrl;
    const preview = typeof getTestMessageUrl === 'function' ? getTestMessageUrl(info as unknown) : null;

    return NextResponse.json({ ok: true, preview });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 });
  }
}