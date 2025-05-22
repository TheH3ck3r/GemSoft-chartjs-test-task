import { ChartSummary } from "@/types/api";
import styles from "./ChartCheckPanel.module.scss";
import { FC } from "react";
import { Checkbox } from "@mui/material";
import selectedChartsStore from "@/common/stores/selectedChartsStore";

export const ChartCheckPanel: FC<ChartSummary> = ({ name }) => {
  const selected = selectedChartsStore.getSelectedNames;

  return (
    <div className={styles.root}>
      {name}
      <Checkbox checked={selected.includes(name)} />
    </div>
  );
};
