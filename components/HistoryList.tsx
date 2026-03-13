"use client";

import { useEffect, useState } from "react";

export default function HistoryList() {

  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {

    fetch("/api/history")
      .then(res => res.json())
      .then(setDates);

  }, []);

  if (dates.length === 0) {
    return <p className="text-center text-gray-500">No study history yet.</p>;
  }

  return (

    <ul className="space-y-3">

      {dates.map((date, index) => (

        <li
          key={index}
          className="bg-purple-100 p-3 rounded-lg shadow text-center font-semibold"
        >
          📚 {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </li>

      ))}

    </ul>

  );

}