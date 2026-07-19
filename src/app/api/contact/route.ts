import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
const SALES_EMAIL = "sales@servchip.com";
const CONTACT_EMAIL = "contact@servchip.com";
const SUPPORT_EMAIL = "support@servchip.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, topic, message, quantity, country } =
      body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Name, email, and message are required",
          },
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "VALIDATION_ERROR", message: "Invalid email address" },
        },
        { status: 400 },
      );
    }

    console.log("📩 Contact form submission:", {
      name,
      email,
      company,
      phone,
      topic,
      message,
      quantity,
      country,
      timestamp: new Date().toISOString(),
    });

    if (WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name,
            email,
            company: company || "N/A",
            phone: phone || "N/A",
            country: country || "N/A",
            quantity: quantity || "N/A",
            subject: `[Servchip Inquiry] ${topic || "General"} — ${name}`,
            message: [
              `New inquiry from ${name}`,
              `Email: ${email}`,
              company ? `Company: ${company}` : null,
              phone ? `Phone: ${phone}` : null,
              country ? `Country: ${country}` : null,
              quantity ? `Quantity: ${quantity}` : null,
              `Topic: ${topic || "General Inquiry"}`,
              ``,
              `Message:`,
              message,
            ]
              .filter(Boolean)
              .join("\n"),
            _replyto: email,
            _cc: `${SALES_EMAIL},${CONTACT_EMAIL},${SUPPORT_EMAIL}`,
            _subject: `[Servchip Inquiry] ${topic || "General"} — ${name}`,
          }),
        });

        const web3Data = await web3Res.json();
        if (!web3Data.success) {
          console.error("Web3Forms error:", web3Data);
        }
      } catch (err) {
        console.error("Web3Forms request failed:", err);
      }
    } else {
      console.warn(
        "⚠️ Web3Forms access key not configured. Set WEB3FORMS_ACCESS_KEY env var.",
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Inquiry submitted successfully. Our team will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: "Failed to submit inquiry" },
      },
      { status: 500 },
    );
  }
}
