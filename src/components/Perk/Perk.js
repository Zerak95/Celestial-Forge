import React from 'react';
import classes from './Perk.css';
import Header from './Header/Header';


const perk = (props) => {
    return (
        <div className='Perk'>
            <Header size={2} >{props.name}</Header>
            <Header size={3} >{props.origin}   ({props.cost}cp)</Header>
            <p>{props.content}</p>
        </div>
    )
}

export default perk;