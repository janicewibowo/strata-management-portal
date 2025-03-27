export const runtime = 'edge'; // Mark this as an edge function!

export async function GET() {
  return new Response(
    JSON.stringify({
      status: "✅ All systems operational",
      timestamp: new Date().toISOString()
    }),
    { status: 200 }
  );
}
