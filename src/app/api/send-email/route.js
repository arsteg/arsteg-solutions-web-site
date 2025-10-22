import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY); // Add this in .env.local

export async function POST(req) {
  try {
    const { name, email, company, budget, description } = await req.json();

    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // Construct the email content
    const msg = {
      to: "info@arsteg.com", // Your company email
      from: "no-reply@arsteg.com", // Must be a verified sender in SendGrid
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${description}</p>
      `,
    };

    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("SendGrid Error:", error);
    return new Response(
      JSON.stringify({
        error: error.response?.body?.errors?.[0]?.message || "Failed to send email",
      }),
      { status: 500 }
    );
  }
}
