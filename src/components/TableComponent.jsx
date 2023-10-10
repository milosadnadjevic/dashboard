import React from 'react'
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
    {
      name: "MacBook Pro",
      Price: "$ 1699,00",
      departement: "Electronics and Gadgets",
      status: "active",
    },
    {
      name: "Iphone 15 Pro Max",
      Price: "$ 1499,00",
      departement:
        "Electronics and Gadgets",
      status: "active",
    },
    {
      name: "Garmin Forerunner 945 GPS Running Watch",
      Price: "$ 345,00",
      departement: "Sporting Goods",
      status: "active",
    },
    {
      name: "Nintendo Switch Gaming Console",
      Price: "$ 470,00",
      departement: "Electronics and Gadgets",
      status: "active",
    },
    {
      name: "Roomba Robot Vacuum",
      Price: "$ 699,00",
      departement: "Home and Kitchen",
      status: "active",
    },
    {
      name: "Vitafusion Women's Gummy Vitamins",
      Price: "$ 25,00",
      departement: "Health and Wellness",
      status: "active",
    },
    {
      name: "Dell Urban Backpack 15",
      Price: "$ 145,99",
      departement: "Electronics Accessories",
      status: "active",
    },
  ];

const TableComponent = () => {
  return (
    <Card className='mt-4'>
    <Title>Best Selling Products 2023</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.Price}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.departement}</Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}

export default TableComponent