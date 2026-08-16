import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, email, service, notes } = req.body;

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    await client.messages.create({
      body: `New Booking!\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nService: ${service}\nNotes: ${notes || 'None'}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.CLIENT_PHONE_NUMBER
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error sending text message.' });
  }
}