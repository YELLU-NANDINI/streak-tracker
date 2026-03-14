"use client";

import { useEffect, useState } from "react";

export default function HistoryList() {

  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {

    let stored = JSON.parse(localStorage.getItem("studyDates") || "[]");

    stored.sort().reverse();

    setDates(stored);

  }, []);

  return (

    <ul className="space-y-3">

      {dates.map((date, index) => (
        <li
          key={index}
          className="bg-purple-100 p-3 rounded-lg text-center"
        >
          {date}
        </li>
      ))}

    </ul>

  );
}