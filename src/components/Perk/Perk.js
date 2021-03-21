import React from 'react';
import classes from './Perk.css';
import Header from './Header/Header';
import Aux from '../../hoc/Aux'


const perk = (props) => {
    // console.log(props.origin);
    let perk = null

    if(props.data !== null){
        perk = (
            <Aux>
                <div className='Perk'>
                    <Header size={2} >{props.data.name}</Header>
                    <Header size={3} >{props.data.origin}   ({props.data.cost}cp)</Header>
                    <p>{props.data.description}</p>
                </div>
                {props.children}
            </Aux>
        )
    }
    return (
        perk
    )
}

export default perk;