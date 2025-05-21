import { ChartSummary } from "@/types/api";
import styles from "./ChartCheckPanel.module.scss";
import { FC } from "react";
import { Checkbox } from "@mui/material";

export const ChartCheckPanel: FC<ChartSummary> = ({ name, uuid }) => {
  console.log(uuid);

  return (
    <div className={styles.root}>
      {name}
      <Checkbox />
    </div>
  );
};
