import { NextResponse } from "next/server";

const allMovies = [
  { id: "1", title: "Inception", genre: ["Sci-Fi"] },
  { id: "2", title: "The Dark Knight", genre: ["Action", "Crime"] },
  { id: "3", title: "Interstellar", genre: ["Drama", "Sci-Fi"] },
  { id: "4", title: "Tenet", genre: ["Action"] },
  { id: "5", title: "Dunkirk", genre: ["War", "Drama"] },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.toLowerCase();
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = 2;
  let filtered = allMovies;
  if (search) {
    filtered = filtered.filter((m) => m.title.toLowerCase().includes(search));
  }
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);
  return NextResponse.json(paged);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newMovie = { id: `${Date.now()}`, title: body.title, genre: ["Uncategorized"] };
  allMovies.push(newMovie);
  return NextResponse.json({ success: true, movie: newMovie });
}
