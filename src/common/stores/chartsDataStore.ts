import { ChartData } from "@/types/api";
import { makeAutoObservable } from "mobx";

export class ChartDataStore {
  chartsData: ChartData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSChartsData(data: ChartData[]) {
    this.chartsData = data;
  }

  get getChartsData(): ChartData[] {
    return this.chartsData;
  }
}

const chartDataStore = new ChartDataStore();

export default chartDataStore;
