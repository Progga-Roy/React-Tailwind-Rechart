import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices,setPrices]= useState([])
    useEffect(()=>{
        fetch('/public/prices.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div>
            <h1 className='text-4xl text-center text-purple-500 mt-10 font-bold'>Awesome Affordable Price</h1>

          <div className='grid md:grid-cols-3 gap-3 mx-12 mt-8'>
          {
            prices.map(price=><PriceCard key={price.id} price={price}></PriceCard>)
            
           }

          </div>
         
        </div>
    );
};

export default PriceList;