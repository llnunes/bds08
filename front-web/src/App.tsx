import SalesByGender from "components/sales-by-gender";
import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import { FilterData } from "./types";

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onSubmitFilter = (filter: FilterData) => {};

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={onSubmitFilter} />
        <SalesByGender filterData={filterData} />
      </div>
    </>
  );
}

export default App;
