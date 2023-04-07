import React from 'react';

const Link = (props) => { 
    const {name,path} = props.route
    return (
        <li>
            <a className='block text-xl md:p-2 md:border-2 m-2 hover:bg-slate-600 rounded ' href={path}>{name}</a>
        </li>
    );
};

export default Link;
