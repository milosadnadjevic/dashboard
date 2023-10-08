import React from 'react'
import { Card, Metric, Text, Flex, BadgeDelta } from '@tremor/react'

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
    <Flex>
        <Text>Sales</Text>
        <BadgeDelta deltaType='moderateIncrease'>+12.5%</BadgeDelta>      
    </Flex>
    <Metric>$ 34,743</Metric>
  </Card>
  )
}

export default CardItem