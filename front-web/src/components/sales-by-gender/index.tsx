import PieChartCard from 'components/pie-chart-card';
import React from 'react'
import { FilterData } from 'types'
import { formatPrice } from 'utils/formatters';

import './styles.css';

type Props = {
    filterData?: FilterData;
}

const SalesByGender = ({ filterData } : Props) => {
  return (
    <div className="sales-by-gender-container base-card">      
      <div className="sales-by-gender-data">
        <div className="sales-by-gender-quantity-container">
          <h2 className="sales-by-gender-quantity">{formatPrice(20000.00)}</h2>
          <span className="sales-by-gender-quantity-label">Total de Vendas</span>          
        </div>
        <div className="sales-by-gender-chart">
            <PieChartCard name="" labels={['Nome1','Nome2','Nome3']} series={[12,56,178]} />
        </div>
      </div>
    </div>
  )
}

export default SalesByGender