import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_MAIL_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, budget, description } = req.body;

  // Server-side validation
  if (!name || !email || !description) {
    return res.status(400).json({ error: 'Name, email, and description are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <info@arsteg.com>', // Must be a verified sender in Resend
      to: 'info@arsteg.com', // Recipient email (your business email)
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
          <p><strong>Description:</strong> ${description}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}