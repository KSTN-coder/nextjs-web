// src/components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus('Message sent successfully!');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div>
            <h2 className="text-2xl font-semibold">ติดต่อเรา</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Send
      </button>
      {status && <p>{status}</p>}
    </form>
    </div>
  );
}