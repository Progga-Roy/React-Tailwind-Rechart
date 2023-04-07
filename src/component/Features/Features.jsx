import React from 'react';
import { BeakerIcon,CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    console.log(feature)
    return (
        <div className='text-black flex items-center'>
             <CheckCircleIcon className="h-5 w-5 text-green-800" />
         <span className='ml-2'>{feature}</span>
        </div>
    );
};

export default Features;