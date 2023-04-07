import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({price}) => {
    return (
        <div className='bg-teal-500 p-4 py-7 rounded flex flex-col '>
             <p className='text-center'><span className='text-5xl text-purple-600 font-extrabold'>{price.price}</span><span className='text-2xl text-red-100'>/mon</span></p>
          <h5 className='text-2xl my-5 font-bold text-black text-center'>{price.name}</h5>
         <p className='font-bold underline text-xl'>Features :  </p>
        {
          price.features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
        }
         <button className=' mt-auto w-full bg-purple-600 hover:bg-purple-900 py-2 rounded font-bold'>Buy Now</button>
          
        </div>
    );
};

export default PriceCard;