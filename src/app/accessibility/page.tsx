
export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold" role="heading">Accessible Page</h1>
      <form className="mt-4">
        <label htmlFor="name" className="block mb-1 font-semibold">Name:</label>
        <input id="name" name="name" className="border p-2" aria-required="true" aria-label="Name input" />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-3 py-1"
          aria-label="Submit name"
        >Submit</button>
      </form>
      <p className="mt-4" role="status">Ensure proper labels and roles are used for screen readers.</p>
    </div>
  );
}