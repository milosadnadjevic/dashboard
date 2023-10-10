import React from 'react'
import { Card, Metric, Text, Flex, BadgeDelta } from '@tremor/react'

const NetSalesCard = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
    <Flex>
        <Text>Net Sales</Text>
        <BadgeDelta deltaType='moderateIncrease'>+17.5%</BadgeDelta>      
    </Flex>
    <Metric>$ 112,743</Metric>
  </Card>
  )
}

export default NetSalesCard