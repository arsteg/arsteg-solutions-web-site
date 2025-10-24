import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, company, budget, description } = await req.json();

    // Validate required fields
    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: Number(process.env.HOSTINGER_SMTP_PORT),
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.HOSTINGER_EMAIL,
        pass: process.env.HOSTINGER_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.HOSTINGER_EMAIL}>`, // sender address
      to: "info@arsteg.com", // recipient (can be yourself)
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

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      { status: 500 }
    );
  }
}
