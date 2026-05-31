# Paradise Crew Contact Form

This project now submits the contact form directly to Formspree, so you do not need a backend or serverless function for the form.

## What changed

- `src/components/ContactSection.tsx` now sends the form directly to your Formspree endpoint.

## Setup

1. Create a Formspree form and copy its endpoint URL.

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id_here
```

2. Put that endpoint in your `.env` file as `VITE_FORMSPREE_ENDPOINT`.

3. Start Vite locally:

```bash
npm run dev
```

4. Open the site, submit the contact form, and confirm the message arrives in your Formspree inbox/email notification.

## Formspree notes

- If you want replies to go back to the visitor, Formspree will use the submitted email field.
- If Formspree rejects the submission, check the form settings in the Formspree dashboard and verify the endpoint URL.
