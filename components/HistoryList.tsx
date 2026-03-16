"use client";

import { useEffect, useState } from "react";

export default function HistoryList() {

  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {

    let stored = JSON.parse(localStorage.getItem("studyDates") || "[]");

    // sort newest first
    stored.sort().reverse();

    setDates(stored);

  }, []);

  return (

    <ul className="space-y-3">

      {dates.length === 0 && (
        <p className="text-center text-gray-500">
          No study history yet.
        </p>
      )}

      {dates.map((date, index) => (
        <li
          key={index}
          className="bg-purple-100 p-3 rounded-lg text-center font-semibold"
        >
          🔥 {date}
        </li>
      ))}

    </ul>

  );
}