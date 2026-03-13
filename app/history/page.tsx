import HistoryList from "@/components/HistoryList";
import Link from "next/link";

export default function HistoryPage() {

  return (

    <main className="min-h-screen bg-gradient-to-r from-green-900 via-yellow-500 to-yellow-500 text-white flex justify-center items-center">

      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-[420px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          📅 Study History
        </h1>

        <HistoryList />

        <Link
          href="/"
          className="block mt-6 text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
        >
          ← Back to Dashboard
        </Link>

      </div>

    </main>

  );

}