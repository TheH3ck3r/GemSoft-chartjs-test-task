"use client";

import { FC } from "react";
import styles from "./LeftNavbar.module.scss";
import { ChartSummary } from "@/types/api";
import { CircularProgress } from "@mui/material";
import { ChartCheckPanel } from "../ChartCheckPanel";
import selectedChartsStore from "@/common/stores/selectedChartsStore";
import { toJS } from "mobx";

export type LeftNavbarProps = {
  chartSummary: Array<ChartSummary>;
};

export const LeftNavbar: FC<LeftNavbarProps> = ({ chartSummary }) => {
  selectedChartsStore.setSelectedChartsData(chartSummary);
  console.log("store: ", toJS(selectedChartsStore.getSelectedCharts));

  if (chartSummary.length === 0) {
    return (
      <div className={styles.root}>
        <div className={styles.spinner}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {chartSummary.map((chart: ChartSummary, index) => (
        <ChartCheckPanel key={index} name={chart.name} uuid={chart.uuid} />
      ))}
    </div>
  );
};
