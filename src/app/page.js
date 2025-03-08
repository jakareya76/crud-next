export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow p-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-800 font-mono">Books</h2>

          <button className="px-8 py-3 bg-black text-md cursor-pointer font-semibold rounded-full text-white">
            Create Now
          </button>
        </div>

        <div className="w-full py-5">
          <input
            type="text"
            placeholder="write a title.."
            className="border w-full py-2 px-5 rounded-full placeholder-slate-800"
          />
        </div>

        <div className="w-full px-6 py-2">
          <ul>
            <li className="my-5">
              <div className="flex gap-5">
                <button className="p-3 bg-blue-500 text-lg rounded-xl text-white shadow cursor-pointer">
                  Edit
                </button>
                <button className="p-3 bg-red-500 text-lg rounded-xl text-white shadow cursor-pointer">
                  Delete
                </button>
                <h2 className="py-3">1. Book Name</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
