import React from 'react'
import AreaChartComponent from './AreaChartComponent'
import TableComponent from './TableComponent'
import TotalSalesCard from './TotalSalesCard'
import TotalRefundCard from './TotalRefundCard'
import NetSalesCard from './NetSalesCard'

const LeftColumn = () => {
  return (
    <div className='w-full flex flex-col justify-between'>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
            <TotalSalesCard />
            <TotalRefundCard />
            <NetSalesCard />
        </div>
        <div className='flex-auto w-full'>
            <AreaChartComponent />
            <TableComponent />
        </div>
    </div>
  )
}

export default LeftColumn