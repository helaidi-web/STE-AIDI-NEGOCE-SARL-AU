const BUSINESS_EMAIL = 'aidinegocesarlau@gmail.com';
const MAX_LENGTHS = {
  fullName: 120,
  phone: 40,
  email: 254,
  subject: 160,
  message: 5000
};

function clean(value, maxLength) {
  return String(value || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const body = request.body || {};
  if (clean(body.website, 200)) {
    return response.status(200).json({ ok: true });
  }

  const fullName = clean(body.fullName, MAX_LENGTHS.fullName);
  const phone = clean(body.phone, MAX_LENGTHS.phone);
  const email = clean(body.email, MAX_LENGTHS.email).toLowerCase();
  const subject = clean(body.subject, MAX_LENGTHS.subject);
  const message = clean(body.message, MAX_LENGTHS.message);

  if (!fullName || !phone || !email || !subject || !message || !isValidEmail(email)) {
    return response.status(400).json({ error: 'Veuillez remplir correctement tous les champs obligatoires.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO || BUSINESS_EMAIL;
  if (!apiKey || !from || !to) {
    console.error('Email service is not configured.');
    return response.status(500).json({ error: 'Le service d’envoi est momentanément indisponible.' });
  }

  const emailBody = [
    'Nouvelle demande reçue depuis le site web AIDI NÉGOCE.',
    '',
    '--------------------------------',
    'INFORMATIONS DU CLIENT',
    '--------------------------------',
    '',
    `Nom complet: ${fullName}`,
    `Téléphone: ${phone}`,
    `Email: ${email}`,
    `Sujet: ${subject}`,
    '',
    '--------------------------------',
    'MESSAGE',
    '--------------------------------',
    '',
    message,
    '',
    '--------------------------------',
    'SOURCE',
    '--------------------------------',
    '',
    'Site web AIDI NÉGOCE SARL AU'
  ].join('\n');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Site Web] Nouvelle demande de devis - ${subject}`,
        text: emailBody
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Email provider rejected the message:', errorText);
      return response.status(502).json({ error: 'L’envoi du message a échoué.' });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Email provider request failed:', error);
    return response.status(502).json({ error: 'L’envoi du message a échoué.' });
  }
}
