import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "10 AM", bots: 8 },
  { name: "11 AM", bots: 9 },
  { name: "12 PM", bots: 6 },
  { name: "1 PM", bots: 10 },
];

export default function Analytics() {
  return (
    <div className="analytics-page">
      <h1>Analytics</h1>

      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="bots" stroke="blue" />
      </LineChart>
    </div>
  );
}
