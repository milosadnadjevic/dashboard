import React from 'react'
import { Card, Title, AreaChart } from '@tremor/react'

const chartdata = [
    {
      date: "Jan 22",
      CurrentYear: 2890,
      "Previous Year": 2338,
    },
    {
      date: "Feb 22",
      CurrentYear: 2756,
      "Previous Year": 2103,
    },
    {
      date: "Mar 22",
      CurrentYear: 3322,
      "Previous Year": 2194,
    },
    {
      date: "Apr 22",
      CurrentYear: 3470,
      "Previous Year": 2108,
    },
    {
      date: "May 22",
      CurrentYear: 3475,
      "Previous Year": 1812,
    },
    {
      date: "Jun 22",
      CurrentYear: 3129,
      "Previous Year": 1726,
    },
  ]
  
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString()
  }
  
const AreaChartComponent = () => {
  return (
    <Card className='mt-4'>
            <Title>Revenue over time (USD)</Title>
            <AreaChart
                className="h-72 mt-4"
                data={chartdata}
                index="date"
                categories={["CurrentYear", "Previous Year"]}
                colors={["indigo", "cyan"]}
                valueFormatter={dataFormatter}
            />
        </Card>
  )
}

export default AreaChartComponent