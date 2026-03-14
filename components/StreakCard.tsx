"use client";

import { useEffect, useState } from "react";

export default function StreakCard() {

  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);
  const [last, setLast] = useState("");

  useEffect(() => {

    let dates = JSON.parse(localStorage.getItem("studyDates") || "[]");

    dates.sort().reverse();

    setTotal(dates.length);

    if (dates.length > 0) {
      setLast(dates[0]);
    }

    let currentStreak = 1;

    for (let i = 1; i < dates.length; i++) {

      let prev = new Date(dates[i - 1]);
      let curr = new Date(dates[i]);

      let diff = (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        currentStreak++;
      } else {
        break;
      }

    }

    if (dates.length > 0) {
      setStreak(currentStreak);
    }

  }, []);

  return (

    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-8 rounded-2xl shadow-2xl space-y-4 text-center max-w-xl mx-auto">

      <p className="text-2xl font-bold text-white">
🔥 Current Streak: {streak} days
</p>

<p className="text-lg text-white/90">
📚 Total Study Days: {total}
</p>

<p className="text-lg text-white/90">
📅 Last Studied: {last || "None"}
</p>

    </div>

  );
}