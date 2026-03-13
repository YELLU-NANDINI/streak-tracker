import { NextResponse } from "next/server"
import { calculateStreak } from "@/lib/streakLogic"
import { studyDates } from "../study/route"

export async function GET() {

  const streak = calculateStreak(studyDates)

  return NextResponse.json({

    currentStreak: streak,
    totalDays: studyDates.length,
    lastStudyDate: studyDates[studyDates.length - 1] || null

  })

}