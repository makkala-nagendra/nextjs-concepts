export const dynamic = "force-static";

export default function PrerenderPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Partial Pre-rendering Page</h1>
      <p>This page is statically generated and served from the edge.</p>
    </div>
  );
}