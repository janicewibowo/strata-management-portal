export const runtime = 'edge';

export async function GET() {
  const response = await fetch('https://wttr.in/Sydney?format=3');
  const buffer = await response.arrayBuffer();
  const decoder = new TextDecoder('utf-8');
  const raw = decoder.decode(buffer);
  const weather = raw.trim();

  return new Response(`<h1>Current Weather</h1><p>${weather}</p>`, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}
