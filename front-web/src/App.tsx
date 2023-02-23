import SalesByGender from "components/sales-by-gender";
import { buildSalesByStoreChart } from "helpers";
import { useEffect, useMemo, useState } from "react";
import { buildFilterParams, makeRequest } from "request";
import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import { FilterData, PieChartConfig, SalesByGenderResponse, SalesSummaryData } from "./types";

const initialChart = {
  labels: [],
  series: [] 
};

const initialSummary = {
  sum: 0,
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>(initialChart);
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByGenderResponse[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStoreChart(response.data);
        setSalesByStore(newSalesByStore);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  const onSubmitFilter = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={onSubmitFilter} />
        <SalesByGender totalPrice={summary?.sum} name="" labels={salesByStore?.labels} series={salesByStore?.series}/>
      </div>
    </>
  );
}

export default App;
