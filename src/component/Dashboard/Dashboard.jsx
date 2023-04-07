import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
    const students = [
        {
            id: 1,
            name: 'Alice',
            physics: 80,
            chemistry: 75,
            math: 85
        },

        {
            id: 2,
            name: 'Bob',
            physics: 90,
            chemistry: 85,
            math: 75
        },
        {
            id: 3,
            name: 'Charlie',
            physics: 75,
            chemistry: 80,
            math: 90
        },
        {
            id: 4,
            name: 'David',
            physics: 85,
            chemistry: 90,
            math: 80
        },
        {
            id: 5,
            name: 'Eve',
            physics: 70,
            chemistry: 75,
            math: 85
        },
        {
            id: 6,
            name: 'Frank',
            physics: 85,
            chemistry: 80,
            math: 90
        },
        {
            id: 7,
            name: 'Grace',
            physics: 90,
            chemistry: 85,
            math: 75
        },
        {
            id: 8,
            name: 'Harry',
            physics: 75,
            chemistry: 80,
            math: 90
        },
        {
            id: 9,
            name: 'Isabelle',
            physics: 85,
            chemistry: 90,
            math: 80
        },
        {
            id: 10,
            name: 'Jack',
            physics: 70,
            chemistry: 75,
            math: 85
        },
        {
            id: 11,
            name: 'Kate',
            physics: 85,
            chemistry: 80,
            math: 90
        },
        {
            id: 12,
            name: 'Liam',
            physics: 90,
            chemistry: 85,
            math: 75
        }
    ];

    return (
        <div>
        <LineChart
        
        width={1000}
        height={400}
        data={students}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
              <CartesianGrid strokeDasharray="3 3" />
     
          <Line dataKey='physics'> </Line>
          <Line dataKey='math' stroke="#8884d8"> </Line>
          <Line dataKey='chemistry' stroke="#6778d8"> </Line>
          <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
        </LineChart>
        </div>
    );
};

export default Dashboard;