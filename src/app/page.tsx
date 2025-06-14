import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Next.js + TypeScript Examples</h1>
      <ul className="list-disc pl-4 space-y-2">
        <li><Link href="/routing">Basic Routing</Link></li>
        <li><Link href="/routing/dynamic/123">Dynamic Routing</Link></li>
        <li><Link href="/fetching">Static & Dynamic Rendering</Link></li>
        <li><Link href="/streaming">Streaming Example</Link></li>
        <li><Link href="/prerender">Partial Prerendering</Link></li>
        <li><Link href="/search-pagination">Search + Pagination</Link></li>
        <li><Link href="/error-handling">Error Handling</Link></li>

        <li><Link href="/mutate">Mutating Data</Link></li>
        {/* <li><Link href="/a11y">Accessibility</Link></li>
        <li><Link href="/auth">Authentication</Link></li> */}
        <li><Link href="/metadata">Metadata / SEO</Link></li>
      </ul>
    </main>
  );
}