"use client";

export default function StudyButton() {

  async function markStudy() {

    const res = await fetch("/api/study", {
      method: "POST"
    });

    const data = await res.json();

    alert(data.message);

    window.location.reload();

  }

  return (

    <button
      onClick={markStudy}
      className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition transform hover:scale-105"
    >
      I Studied Today 🔥
    </button>

  );

}