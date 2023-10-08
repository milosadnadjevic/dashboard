import React from 'react'
import CardItem from './CardItem'
import AreaChartComponent from './AreaChartComponent'

const LeftColumn = () => {
  return (
    <div className='w-full flex flex-col justify-between'>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
        <div className='flex-auto w-full'>
            <AreaChartComponent />
        </div>
    </div>
  )
}

export default LeftColumn