'use client';

export default function HomePage() {
  const buildingName = process.env.NEXT_PUBLIC_BUILDING_NAME || "Sunrise Apartments";

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to {buildingName}</h1>
      <p>This website helps residents and the Strata Committee stay informed and connected.</p>

      <h2>Quick Links</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><a href="/committee">👥 Meet the Committee</a></li>
        <li><a href="/announcements">📢 Announcements</a></li>
        <li><a href="/documents">📄 Building Documents</a></li>
        <li><a href="/contact">✉️ Contact the Committee</a></li>
      </ul>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        If you are a resident, please check this website regularly for updates.
      </p>
    </main>
  );
}
