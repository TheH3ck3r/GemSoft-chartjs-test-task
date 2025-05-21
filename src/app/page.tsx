"use client";

import { LeftNavbar } from "./_components/LeftNavbar";
import { Data } from "./_components/Data";
import { useEffect, useState } from "react";
import { ChartData, ChartSummary } from "@/types/api";
import { getChartData, getChartSummary } from "@/common/fetchers";

export default function Home() {
  const [chartSummary, setChartSummary] = useState<ChartSummary[]>([]);
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    getChartSummary().then(setChartSummary);

    getChartData([
      "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "c9b1ee67-9218-4e3b-afbe-b3a9d31f6e15",
    ]).then(setData);
  }, []);

  console.log("chartSummary: ", chartSummary);

  console.log("data: ", data);

  return (
    <>
      <LeftNavbar chartSummary={chartSummary} />
      <Data />
    </>
  );
}
