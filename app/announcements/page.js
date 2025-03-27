'use client';
import { useEffect, useState } from 'react';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch('/data/announcements.json')
      .then((res) => res.json())
      .then(setAnnouncements);
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>📢 Announcements</h1>
      <ul>
        {announcements.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong>: {item.message}
          </li>
        ))}
      </ul>
    </main>
  );
}
