/**
 * REFERENCE SERVERLESS FUNCTION — Vercel/Netlify-compatible.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The old frontend called Brevo's API directly with the API key baked into
 * the browser bundle. That leaks the key to anyone who opens DevTools.
 *
 * This file is a template for a server-side proxy: the frontend POSTs to
 * `/api/contact` (or wherever you deploy this), the function attaches the
 * secret key server-side, and Brevo (or Resend / Postmark) does the send.
 *
 * DEPLOYMENT
 * ----------
 * 1. Rename this file to `contact.ts` (drop `.example`).
 * 2. Deploy to Vercel (`api/contact.ts`) or Netlify (`netlify/functions/contact.ts`).
 * 3. Add the env var `BREVO_API_KEY` (or your provider's equivalent) in your host.
 * 4. In the frontend `.env`, set `VITE_CONTACT_ENDPOINT="/api/contact"`.
 *
 * The .example suffix keeps this out of the production build until you're
 * ready to wire it up.
 */

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

// Minimal Vercel-style handler signature. Adapt for your host.
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = (await req.json()) as ContactPayload;

  // Basic validation
  if (!body.name || !body.email || !body.subject) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Sanity email check — real work is done by the mail provider.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return new Response(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
    );

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: "Kloudfox website", email: "noreply@kloudfox.com" },
      to: [{ email: "support@kloudfox.com", name: "Kloudfox Support" }],
      replyTo: { email: body.email, name: body.name },
      subject: `Contact: ${body.subject}`,
      htmlContent: `
        <h3>New contact submission</h3>
        <p><strong>Name:</strong> ${escape(body.name)}</p>
        <p><strong>Email:</strong> ${escape(body.email)}</p>
        <p><strong>Subject:</strong> ${escape(body.subject)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${escape(body.message ?? "")}</pre>
      `,
    }),
  });

  if (!brevoRes.ok) {
    const detail = await brevoRes.text();
    return new Response(JSON.stringify({ error: "Upstream failure", detail }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
