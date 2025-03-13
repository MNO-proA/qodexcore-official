"use server";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/Contact.js";
import { Resend } from "resend";

export async function handleContactForm(formData) {
  try {
    await connectToDatabase();
    const { fullName, email, message } = Object.fromEntries(formData);

    // Save to DB
    const newMessage = new ContactMessage({ fullName, email, message });
    await newMessage.save();

    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Set a timeout for the email operations
    const emailPromises = [
      // Admin Email
      resend.emails.send({
        from: process.env.Q_MAIL,
        to: "admin@qodexcore.com",
        subject: `New Contact Message from ${fullName}`,
        html: `
         <html>
  <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); text-align: left;">
            <tr>
              <td style="border-bottom: 2px solid #4A90E2; padding-bottom: 15px;">
                <h2 style="color: #333; margin: 0;">New Contact Message</h2>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 20px;">
                <p style="color: #333; font-size: 16px; margin: 0;">
                  <strong>Name:</strong> ${fullName}
                </p>
                <p style="color: #333; font-size: 16px; margin: 5px 0;">
                  <strong>Email:</strong> <a href="mailto:${email}" style="color: #4A90E2; text-decoration: none;">${email}</a>
                </p>
                <p style="color: #333; font-size: 16px; margin: 5px 0;">
                  <strong>Message:</strong>
                </p>
                <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; margin-top: 5px;">
                   <blockquote style="border-left: 4px solid #4A90E2; padding-left: 10px; font-style: italic; color: #555;">
                    ${message}
                  </blockquote>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 20px;">
                <p style="color: #777; font-size: 14px;">
                  This message was sent via the Qodexcore contact form.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>


        `,
      }),

      // Client Welcome Email
      resend.emails.send({
        from: process.env.Q_MAIL,
        to: email,
        subject: "Thank You for Reaching Out to Qodexcore!",
        html: `
        <html>
  <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); text-align: center;">
            <tr>
              <td align="center">
                <img src="https://res.cloudinary.com/dbnscgf7r/image/upload/v1741877906/2_sjbfdk.png" alt="Qodexcore Logo" style="width: 120px; margin-bottom: 20px;">
              </td>
            </tr>
            <tr>
              <td align="center">
                <h2 style="color: #333;">Hello ${fullName},</h2>
                <p style="color: #555; font-size: 16px;">
                  Thank you for reaching out to <strong>Qodexcore</strong>! Your message has been received, and our team is reviewing it.
                </p>
                <p style="color: #555; font-size: 16px;">
                  We understand that your time is valuable, and we’ll get back to you as soon as possible. If your inquiry is urgent, feel free to reach out to us directly at:
                </p>
                <p style="font-size: 18px; font-weight: bold; color: #4A90E2;">
                  <a href="mailto:admin@qodexcore.com" style="color: #4A90E2; text-decoration: none;">admin@qodexcore.com</a>
                </p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <div style="margin: 20px 0; padding: 15px; background-color: #e3f2fd; border-radius: 8px; color: #333;">
                  <p style="margin: 0; font-weight: bold;">What's Next?</p>
                  <p style="margin: 5px 0;">One of our team members will get in touch with you shortly.</p>
                </div>
                <p style="font-size: 14px; color: #777;">
                  Stay connected with us for the latest updates and insights:
                </p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <a href="https://facebook.com/qodexcore" style="margin: 0 5px;"><img src="https://img.icons8.com/color/48/facebook.png" width="24"></a>
                <a href="https://twitter.com/qodexcore" style="margin: 0 5px;"><img src="https://img.icons8.com/color/48/twitter.png" width="24"></a>
                <a href="https://linkedin.com/company/qodexcore" style="margin: 0 5px;"><img src="https://img.icons8.com/color/48/linkedin.png" width="24"></a>
              </td>
            </tr>
            <tr>
              <td align="center">
                <p style="margin-top: 20px; font-weight: bold;">Best Regards,</p>
                <p style="color: #4A90E2; font-size: 16px;">The Qodexcore Team</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

        `,
      }),
    ];

    // Use Promise.race to handle potential timeout
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Email operation timed out")), 5000)
    );

    // Either the emails will send or the timeout will trigger
    await Promise.race([Promise.all(emailPromises), timeout]);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error(error);
    // Even if we timeout, if we got this far, the DB save worked
    if (error.message === "Email operation timed out") {
      return {
        success: true,
        message:
          "Message received! You'll receive a confirmation email shortly.",
      };
    }

    return {
      success: false,
      message: "Something went wrong, please try again later.",
      error: error.message,
    };
  }
}
