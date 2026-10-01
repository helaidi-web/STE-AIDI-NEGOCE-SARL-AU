# AIDI NÉGOCE

## Contact form email delivery

The Vite frontend submits the Contact form to the serverless endpoint
`/api/contact`. The endpoint sends the message through Resend and never
exposes credentials to the browser.

For production, deploy the project on a platform supporting Vercel-style
serverless functions and configure these environment variables:

```env
RESEND_API_KEY=re_...
EMAIL_FROM=AIDI NEGOCE <contact@your-verified-domain.com>
EMAIL_TO=aidinegocesarlau@gmail.com
```

`EMAIL_FROM` must use a domain verified in the Resend account. `EMAIL_TO`
is fixed to the business inbox by default and must not be replaced by a
visitor-provided address. The endpoint sets the visitor email as `Reply-To`
so the business can reply directly from Gmail.

For local development, run the frontend with `npm run dev` and use a
deployment or local serverless runtime that serves `/api/contact`; Vite
alone does not execute serverless functions.
