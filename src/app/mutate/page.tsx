'use client';
import { useState } from 'react';

export default function MutatePage() {
  const [title, setTitle] = useState('');
  const [submittedMovie, setSubmittedMovie] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    setSubmittedMovie(data.movie.title);
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
      {submittedMovie && <p className="text-green-600">✅ Added: {submittedMovie}</p>}
    </div>
  );
}