/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

export async function handleWaitlistSubmit(prevState: any, formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  // Validate
  if (!fullName || !email || !role) {
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
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
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
