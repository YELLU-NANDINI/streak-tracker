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

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-xl text-center">
    <h2 className="text-lg font-semibold">🔥 Current Streak</h2>
    <p className="text-3xl font-bold mt-2">{streak} days</p>
  </div>

  
  <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-xl text-center">
    <h2 className="text-lg font-semibold">📚 Total Study Days</h2>
    <p className="text-3xl font-bold mt-2">{total}</p>
  </div>

 
  <div className="bg-gradient-to-r from-green-400 to-emerald-600 text-white p-6 rounded-2xl shadow-xl text-center">
    <h2 className="text-lg font-semibold">📅 Last Studied</h2>
    <p className="text-2xl font-bold mt-2">{last}</p>
  </div>

</div>
  );
}