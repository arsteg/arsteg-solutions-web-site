import { ServerClient } from "postmark";

const client = new ServerClient(process.env.NEXT_PUBLIC_POSTMARK_API_KEY);

export async function POST(req) {
  const { name, email, company, budget, description } = await req.json();

  if (!name || !email || !description) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required." }), { status: 400 });
  }

  try {
    await client.sendEmail({
      From: process.env.NEXT_PUBLIC_POSTMARK_SENDER_EMAIL,
      To: process.env.NEXT_PUBLIC_POSTMARK_RECEIVER_EMAIL,
      Subject: `New Inquiry from ${name}`,
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
      TextBody: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Budget: ${budget || "N/A"}
        Message: ${description}
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Postmark Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
