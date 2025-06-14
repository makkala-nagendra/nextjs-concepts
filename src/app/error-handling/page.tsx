import { notFound } from "next/navigation";

export default function ErrorExamplePage() {
  const simulateError = true;
  if (simulateError) notFound();
  return <div className="p-4">This will not render.</div>;
}