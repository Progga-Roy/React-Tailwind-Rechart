import React, { useState } from 'react';
import Link from './Link/Link';
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const routes =[
        {
            id:1,
            name:'Home',
            // path :'/'
        },
        {
            id:2,
            name:'About',
            // path :'/about'
        },
        {
            id:3,
            name:'Contact',
            path :'/contact'
        },
        {
            id:4,
            name:'Products',
            path :'/products'
        },
        {
            id:5,
            name:'Services',
            path :'/services'
        },
    ]
    return (
        
        <nav>
        <div  onClick={() => setOpen(!open)} className='md:hidden'>
          <span >
            {open == true ?  <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}
          </span>
        </div>
        <ul className={`md:flex justify-center absolute md:static w-full bg-slate-500 text-center duration-500 ease-in-out ${open ? 'top-6' : '-top-96'}`}>
          {routes.map((route) => (
            <li key={route.id}>
              <Link route={route} />
            </li>
          ))}
        </ul>
      </nav>
    
      
    );
};

export default Navbar;

