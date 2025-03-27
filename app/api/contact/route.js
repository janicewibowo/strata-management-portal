export async function POST(request) {
    const data = await request.formData();
    const name = data.get("name");
    const message = data.get("message");
  
    console.log("📨 New contact form submission:", { name, message });
  
    return new Response(
      JSON.stringify({ message: "Form received!" }),
      { status: 200 }
    );
  }
  