import { Suspense } from "react";

async function DelayedContent() {
  await new Promise((res) => setTimeout(res, 2000));
  return <p className="text-green-600">✅ Streamed after delay</p>;
}

export default function StreamingPage() {
  return (
    <div className="p-4">
      <h1 className="font-bold">Streaming Example</h1>
      <Suspense fallback={<p>⏳ Loading stream...</p>}>
        <DelayedContent />
      </Suspense>
    </div>
  );
}