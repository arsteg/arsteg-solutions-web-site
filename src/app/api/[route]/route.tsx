// app/api/send-email/route.js
import sendgridMail from '@sendgrid/mail'; // Default import
import { NextResponse } from 'next/server';

// Initialize SendGrid with your API key
if (!process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not defined in environment variables');
  throw new Error('SENDGRID_API_KEY is not defined');
}
else{
  console.log('SENDGRID_API_KEY is set with:' , process.env.NEXT_PUBLIC_SENDGRID_API_KEY.slice(0, 4) + '...' );
}
sendgridMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Request body:', body); // Log incoming data for debugging
    const { name, email, message, file } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message' },
        { status: 400 }
      );
    }

    // Prepare email data
    const msg = {
      to: 'info@arsteg.com', // Your receiving email address
      from: 'info@arsteg.com', // Must be a verified sender in SendGrid
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Handle file attachment if present
    if (file && file.data && file.name && file.type) {
      msg.attachments = [
        {
          content: file.data, // Base64-encoded file content
          filename: file.name,
          type: file.type,
          disposition: 'attachment',
        },
      ];
    } else if (file) {
      console.warn('File data is incomplete:', file);
    }

    console.log('Sending email with config:', msg); // Log email config
    await sendgridMail.send(msg);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('SendGrid error:', error, error.response?.data); // Log detailed error
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message, sendgridErrors: error.response?.data },
      { status: 500 }
    );
  }
}