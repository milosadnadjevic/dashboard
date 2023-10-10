import React from 'react'
import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
    {
      city: "New York",
      rating: "21,3%",
    },
    {
      city: "Los Angeles",
      rating: "17,8%",
    },
    {
      city: "San Francisco",
      rating: "10,5%",
    },
    {
      city: "Chicago",
      rating: "6%",
    },
    {
      city: "Denver",
      rating: "5%",
    },
    {
      city: "Houston",
      rating: "3,5%",
    }
  ]

const ScoreList = () => {
  return (
    <Card className="max-w-full my-4">
    <Title>Best Performing Locations</Title>
    <List>
      {cities.map((item) => (
        <ListItem key={item.city}>
          <span>{item.city}</span>
          <span>{item.rating}</span>
        </ListItem>
      ))}
    </List>
  </Card>
  )
}

export default ScoreList