"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData as ChartApiData } from "@/types/api";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export type ChartViewer = {
  chart: ChartApiData;
  name: string;
};

export const ChartViewer = ({ chart, name }: ChartViewer) => {
  const data = {
    labels: chart.data.map((point) => point.x),
    datasets: [
      {
        label: name,
        data: chart.data.map((point) => point.y),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};
