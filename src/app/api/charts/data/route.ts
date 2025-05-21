import { NextResponse } from "next/server";
import { charts } from "../../charts";
import { ChartData, ChartDataRequest, Point } from "@/types/api";

const generateData = (): Array<Point> =>
  Array.from({ length: 10 }, (_, i) => ({
    x: i + 1,
    y: parseFloat((Math.random() * 100).toFixed(2)),
  }));

const chartDataMap: Record<string, Array<Point>> = Object.fromEntries(
  charts.map((chart) => [chart.uuid, generateData()])
);

export async function POST(req: Request) {
  const { ids }: ChartDataRequest = await req.json();

  if (!Array.isArray(ids)) {
    return NextResponse.json({ error: "Invalid ids array" }, { status: 400 });
  }

  const result: Array<ChartData> = ids
    .filter((id) => chartDataMap[id])
    .map((uuid) => ({
      uuid,
      data: chartDataMap[uuid],
    }));

  return NextResponse.json(result, { status: 200 });
}
