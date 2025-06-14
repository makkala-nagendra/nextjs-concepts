interface Params {
  params: { id: string };
}

export default function DynamicPage({ params }: Params) {
  return <div className="p-4">Dynamic Route ID: {params.id}</div>;
}
