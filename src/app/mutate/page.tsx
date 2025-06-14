'use client';
import { useState } from 'react';

export default function MutatePage() {
  const [title, setTitle] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/movies', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });
    setSubmitted(true);
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Mutate Movies</h1>
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />
        <button className="bg-blue-600 text-white px-4 py-1">Add</button>
      </form>
      {submitted && <p className="text-green-600">Movie submitted!</p>}
    </div>
  );
}
