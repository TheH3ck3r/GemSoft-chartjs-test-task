"use client";

import { useEffect, useState } from "react";
import { getChartData } from "@/common/fetchers";
import { ChartData } from "@/types/api";
import { ChartViewer } from "../ChartViewer";
import styles from "./Data.module.scss";

export type DataProps = {
  chartsIds: Array<string>;
};

export const Data = ({ chartsIds }: DataProps) => {
  const [charts, setCharts] = useState<ChartData[]>([]);

  useEffect(() => {
    getChartData(chartsIds).then(setCharts);
  }, []);

  return (
    <div className={styles.root}>
      {charts.map((chart) => (
        <ChartViewer key={chart.uuid} chart={chart} />
      ))}
    </div>
  );
};
