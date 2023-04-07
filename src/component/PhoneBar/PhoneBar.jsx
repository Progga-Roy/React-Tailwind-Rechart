import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {
    const [phones,setPhones]= useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
           const loadedData = data.data.data
           console.log(loadedData)
           const phoneData = loadedData.map(phone=>{
                const part = phone.slug.split('-')
                const price = parseInt(part[1])
                const phoneInfo = {
                    name : phone.phone_name,
                    price : price
                   }
                   return phoneInfo ;
           })
           setPhones(phoneData)
        })
     
    },[])
    return (
        <div>
        <ResponsiveContainer width="50%" height={500}>
            <BarChart data={phones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend payload={[{ name: 'Price', type: 'rect', color: '#8884d8' }]} />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    </div>
    );
};

export default PhoneBar;