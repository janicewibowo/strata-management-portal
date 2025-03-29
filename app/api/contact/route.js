export const runtime = "edge" // Keep this line to make it a serverless edge function

export async function POST(request) {
  try {
    // Parse the form data from the request
    const data = await request.formData()

    // Extract all form fields
    const name = data.get("name")
    const email = data.get("email")
    const unit = data.get("unit")
    const subject = data.get("subject")
    const message = data.get("message")

    // Log the submission (this will appear in your Vercel logs)
    console.log("📨 New contact form submission:", {
      name,
      email,
      unit,
      subject,
      message,
    })

    // Here you would typically send an email or store the data
    // For example, you could use the Vercel SendGrid integration
    // or store the data in a database

    // Return a success response
    return new Response(
      JSON.stringify({
        status: "success",
        received: {
          name,
          email,
          unit,
          subject,
          message,
        },
        message: "Thank you for your message. A committee member will get back to you soon.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  } catch (error) {
    // Log the error
    console.error("❌ Error processing contact form:", error)

    // Return an error response
    return new Response(
      JSON.stringify({
        status: "error",
        message: "There was an error processing your request. Please try again.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
