import React from 'react'
import { Card, Metric, Text, Flex, BadgeDelta } from '@tremor/react'

const TotalSalesCard = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
    <Flex>
        <Text>Total Sales</Text>
        <BadgeDelta deltaType='moderateIncrease'>+8.5%</BadgeDelta>      
    </Flex>
    <Metric>$ 156.783</Metric>
  </Card>
  )
}

export default TotalSalesCard