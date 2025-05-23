import { ChartData } from "@/types/api";
import { makeAutoObservable } from "mobx";

export class ChartsDataStore {
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

const chartsDataStore = new ChartsDataStore();

export default chartsDataStore;
