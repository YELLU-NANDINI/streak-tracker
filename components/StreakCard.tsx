"use client";

import { useEffect, useState } from "react";

export default function StreakCard() {

  const [stats, setStats] = useState<any>(null);

  useEffect(() => {

    fetch("/api/streak")
      .then(res => res.json())
      .then(setStats);

  }, []);

  if (!stats) return <p className="text-center">Loading...</p>;

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Streak Card */}
      <div className="bg-orange-500 p-6 rounded-xl shadow-lg text-center">

        <p className="text-xl font-semibold">
          🔥 Current Streak
        </p>

        <p className="text-3xl font-bold mt-2">
          {stats.currentStreak} Days
        </p>

      </div>

      {/* Total Days */}
      <div className="bg-green-500 p-6 rounded-xl shadow-lg text-center">

        <p className="text-xl font-semibold">
          📚 Total Study Days
        </p>

        <p className="text-3xl font-bold mt-2">
          {stats.totalDays}
        </p>

      </div>

      {/* Last Studied */}
      <div className="bg-blue-500 p-6 rounded-xl shadow-lg text-center">

        <p className="text-xl font-semibold">
          📅 Last Studied
        </p>

        <p className="text-xl font-bold mt-2">
         {stats.lastStudyDate 
  ? new Date(stats.lastStudyDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  : "No study yet"}
        </p>

      </div>

    </div>

  );
}