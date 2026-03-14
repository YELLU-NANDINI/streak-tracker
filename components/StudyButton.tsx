"use client";

export default function StudyButton() {

  function markStudy() {

    const today = new Date().toISOString().split("T")[0];

    let studyDates = JSON.parse(localStorage.getItem("studyDates") || "[]");

    if (studyDates.includes(today)) {
      alert("You have already marked today.");
      return;
    }

    studyDates.push(today);

    localStorage.setItem("studyDates", JSON.stringify(studyDates));

    alert("Study marked for today!");

    window.location.reload();
  }

  return (
    <button
      onClick={markStudy}
      className="bg-purple-600 hover:bg-yellow-700 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg text-white"
    >
      I Studied Today 🔥
    </button>
  );
}