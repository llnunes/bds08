import PieChartCard from "components/pie-chart-card";
import { formatPrice } from "utils/formatters";

import "./styles.css";

type Props = {
  labels?: string[];
  name: string;
  series?: number[];  
  totalPrice: number;
};

const SalesByGender = ({ labels = [], name, series = [], totalPrice }: Props) => {
  return (
    <div className="sales-by-gender-container base-card">
      <div className="sales-by-gender-data">
        <div className="sales-by-gender-quantity-container">
          <h2 className="sales-by-gender-quantity">{formatPrice(totalPrice)}</h2>
          <span className="sales-by-gender-quantity-label">
            Total de Vendas
          </span>
        </div>
        <div className="sales-by-gender-chart">
          <PieChartCard
            name={name}
            labels={labels}
            series={series}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesByGender;
