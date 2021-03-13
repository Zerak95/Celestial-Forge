import React from 'react';
import classes from './Perk.css';
import Header from './Header/Header';
import Aux from '../../hoc/Aux'


const perk = (props) => {
    console.log(props.origin);
    return (
        <Aux>
            <div className='Perk'>
                <Header size={2} >{props.name}</Header>
                <Header size={3} >{props.origin}   ({props.cost}cp)</Header>
                <p>{props.content}</p>
            </div>
            {props.children}
        </Aux>
    )
}

export default perk;