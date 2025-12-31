/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleWaitlistSubmit(prevState: any, formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;
  const location = formData.get("location") as string;

  // Extract first name from full name
  const firstName = fullName.split(" ")[0];

  // Validate
  if (!fullName || !email || !role || !location) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    };
  }

  try {
    // Submit to Google Sheets
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwqDYkXrQK9DeCJpYcKnlBkYdm0VZpZUZxU_pKzQzopt0cIV_iFiQ8PQi0H-j4GtJhG/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          role,
          location,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      try {
        await resend.emails.send({
          from: "Beaders Africa <onboarding@resend.dev>",
          to: email,
          subject: "You’re In 💚 Welcome to Beaders Africa",
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>You’re In 💚 Welcome to Beaders Africa</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                <!-- Logo Section -->
                <tr>
                  <td style="padding: 40px 20px 20px; text-align: center;">
                    <a href="https://beadersafrica.com" target="_blank" style="display: inline-block;">
                      <img src="https://beadersafrica.com/logo-1.png" alt="Beaders Africa Logo" style="width: 120px; height: auto; display: block;" />
                    </a>
                  </td>
                </tr>
                
                <!-- Hero Image Section -->
                <tr>
                  <td style="padding: 0 20px 30px;">
                    <div style="background-color: #6B7B5C; border-radius: 12px; padding: 30px; text-align: center;">
                      <img src="https://beadersafrica.com/mail.jpeg" alt="Welcome to Beaders Africa" style="max-width: 100%; height: auto; border-radius: 8px;" />
                    </div>
                  </td>
                </tr>
                
                <!-- Content Section -->
                <tr>
                  <td style="padding: 0 40px;">
                    <h2 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin: 0 0 20px;">Hi ${firstName},</h2>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 16px;">
                      Thank you for joining the Beaders Africa waitlist, I see you, and I'm genuinely glad you're here.
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 16px;">
                      Beaders Africa was built from lived experience. I know what it feels like to create beautiful beadwork and still struggle with visibility, customers, sourcing materials, pricing, mentorship, and community. I've lived it, and that is exactly why this platform exists.
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 24px;">
                      By joining this waitlist, you're now part of a growing community of bead makers and bead lovers across Africa who believe that bead making deserves structure, visibility, and real opportunity.
                    </p>
                    
                    <h3 style="font-size: 18px; font-weight: 700; color: #1a1a1a; margin: 0 0 12px;">Here's what to expect next:</h3>
                    
                    <ul style="font-size: 16px; line-height: 1.8; color: #333333; margin: 0 0 24px; padding-left: 20px;">
                      <li>You'll receive updates as we build behind the scenes</li>
                      <li>We'll be sharing tips on how to prepare and stand out as a bead maker</li>
                      <li>Early access and onboarding details will be shared with waitlisters first</li>
                    </ul>
                    
                    <h3 style="font-size: 18px; font-weight: 700; color: #1a1a1a; margin: 0 0 12px;">For now, I encourage you to:</h3>
                    
                    <ul style="font-size: 16px; line-height: 1.8; color: #333333; margin: 0 0 24px; padding-left: 20px;">
                      <li>Stay engaged with our content</li>
                      <li>Reflect on your bead making journey and where you want to go</li>
                      <li>Get ready, because something meaningful is being built</li>
                    </ul>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 16px;">
                      Thank you for trusting this vision and for showing up.
                    </p>
                    
                    <p style="font-size: 18px; font-weight: 700; color: #1a1a1a; margin: 0 0 24px;">
                      We're just getting started.
                    </p>
                    
                    <p style="font-size: 15px; line-height: 1.6; color: ##636d2f; font-style: italic; margin: 0 0 30px; font-weight: 500;">
                      <strong>P.S.</strong> Beaders Africa is being built intentionally and in phases so we can serve you well. Thank you for your patience — it will be worth it.
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0;">
                      Warmly,<br>
                      <strong>Ibukunoluwa</strong><br>
                      Founder, Beaders Africa<br>
                      🌍 Building structure for Africa's bead economy
                    </p>
                  </td>
                </tr>
                
                <!-- Social Media Section -->
                <tr>
                  <td style="padding: 40px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <table cellpadding="0" cellspacing="0" style="display: inline-block;">
                            <tr>
                              <td style="padding: 0 8px;">
                                <a href="https://www.instagram.com/beaders.africa" target="_blank" style="display: block; width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none; transition: background-color 0.3s;">
                                  <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" style="width: 20px; height: 20px; vertical-align: middle;" />
                                </a>
                              </td>
                              <td style="padding: 0 8px;">
                                <a href="https://x.com/beadersafrica" target="_blank" style="display: block; width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none; transition: background-color 0.3s;">
                                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="X (Twitter)" style="width: 20px; height: 20px; vertical-align: middle;" />
                                </a>
                              </td>
                              <td style="padding: 0 8px;">
                                <a href="https://www.linkedin.com/company/beaders-africa/" target="_blank" style="display: block; width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none; transition: background-color 0.3s;">
                                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 20px; height: 20px; vertical-align: middle;" />
                                </a>
                              </td>
                              <td style="padding: 0 8px;">
                                <a href="https://wa.link/qxdfpz" target="_blank" style="display: block; width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none; transition: background-color 0.3s;">
                                  <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" style="width: 20px; height: 20px; vertical-align: middle;" />
                                </a>
                              </td>
                              <td style="padding: 0 8px;">
                                <a href="https://www.tiktok.com/@beadersafrica" target="_blank" style="display: block; width: 40px; height: 40px; background-color: #f3f4f6; border-radius: 50%; text-align: center; line-height: 40px; text-decoration: none; transition: background-color 0.3s;">
                                  <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style="width: 20px; height: 20px; vertical-align: middle;" />
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 40px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 13px; color: #6b7280; margin: 0 0 8px;">
                      © 2025 Beaders Africa. All rights reserved.
                    </p>
                    <p style="font-size: 13px; color: #6b7280; margin: 0;">
                      Africa's First Bead Marketplace
                    </p>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the whole operation if email fails
        // User is still on the waitlist
      }

      return {
        success: true,
        message: "You're on the waitlist! We'll be in touch soon.",
      };
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
