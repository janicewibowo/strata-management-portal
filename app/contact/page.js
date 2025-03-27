'use client';

export default function ContactPage() {
  return (
    <main>
      <h1>Contact the Committee</h1>
      <form method="POST" action="/api/contact">
        <label>
          Your Name:<br />
          <input type="text" name="name" required />
        </label>
        <br /><br />
        <label>
          Your Message:<br />
          <textarea name="message" rows="4" required></textarea>
        </label>
        <br /><br />
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}
