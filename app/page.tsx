import StreakCard from "@/components/StreakCard";
import StudyButton from "@/components/StudyButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-900 via-pink-400 to-yellow-500 text-white">

      {/* Study History Button - Top Right */}
      <div className="absolute top-6 right-10">
        <Link
          href="/history"
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Study History
        </Link>
      </div>

      {/* Title - Center Top */}
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          📚 Learning Streak Tracker
        </h1>
      </div>

      {/* Dashboard */}
      <div className="max-w-4xl mx-auto mt-16">

        <h2 className="text-center text-3xl font-bold mb-10">
          Dashboard
        </h2>

        <StreakCard />

        <div className="flex justify-center mt-10">
          <StudyButton />
        </div>

      </div>

    </main>
  );
}