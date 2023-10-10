import React from 'react'
import { Card, Metric, Text, Flex, BadgeDelta } from '@tremor/react'

const TotalRefundCard = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
    <Flex>
        <Text>Total Refund</Text>
        <BadgeDelta deltaType='moderateDecrease'>-10.5%</BadgeDelta>      
    </Flex>
    <Metric>$ 12,743</Metric>
  </Card>
  )
}

export default TotalRefundCard