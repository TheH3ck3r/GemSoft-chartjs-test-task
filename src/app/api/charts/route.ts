import { NextResponse } from "next/server";
import { charts } from "../charts";

export async function GET() {
  return NextResponse.json(charts, { status: 200 });
}
