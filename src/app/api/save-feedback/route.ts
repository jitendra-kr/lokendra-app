import { saveFeedback } from "@ft/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    await saveFeedback(body.name, body.feedback);
    return NextResponse.json({ status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
