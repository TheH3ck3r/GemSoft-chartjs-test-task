import { ChartSummary } from "@/types/api";
import { makeAutoObservable } from "mobx";

export class ChartsStore {
  charts: ChartSummary[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCharts(data: ChartSummary[]) {
    this.charts = data;
  }

  get getCharts(): ChartSummary[] {
    return this.charts;
  }

  get getChartsIds(): string[] {
    return this.charts.map((chart) => chart.uuid);
  }

  get getChartsNames(): string[] {
    return this.charts.map((chart) => chart.name);
  }
}

const chartsStore = new ChartsStore();

export default chartsStore;
