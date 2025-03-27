import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'announcements.json');
  const file = await fs.readFile(filePath, 'utf8');
  const announcements = JSON.parse(file);

  // Add new daily reminder
  const today = new Date().toISOString().split('T')[0]; // e.g., 2025-03-28
  const newAnnouncement = {
    date: today,
    message: "📢 Daily reminder: Check the noticeboard!"
  };

  announcements.unshift(newAnnouncement); // Add to the top

  // Save back to file
  await fs.writeFile(filePath, JSON.stringify(announcements, null, 2));

  return new Response(JSON.stringify({ message: "New announcement added." }), {
    status: 200
  });
}
