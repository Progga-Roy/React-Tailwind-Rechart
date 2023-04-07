
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Bchart = () => {
    const bangladeshAreas = [
        {id: 1, name: 'Dhaka', year: 2000, area: 306, population: 10.4},
        {id: 2, name: 'Chittagong', year: 2000, area: 168, population: 4.9},
        {id: 3, name: 'Khulna', year: 2000, area: 45, population: 1.5},
        {id: 4, name: 'Rajshahi', year: 2000, area: 96, population: 3.3},
        {id: 5, name: 'Sylhet', year: 2000, area: 26, population: 0.9},
        {id: 6, name: 'Barisal', year: 2000, area: 32, population: 1.1},
        {id: 7, name: 'Rangpur', year: 2000, area: 70, population: 2.4},
        {id: 8, name: 'Mymensingh', year: 2000, area: 48, population: 1.6},
    ];

    return (
        <ResponsiveContainer width='50%' height={500}>
            <BarChart
                data={bangladeshAreas}
                // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
               <YAxis> </YAxis>
                <Tooltip />
              
                <Bar dataKey="population" stackId="a" fill="#ee82ee" barSize={50} />
                <Bar dataKey="area" stackId="a" fill="#6a5acd" barSize={50} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Bchart;
