import React from 'react';
import classes from './Perk.css';
import Header from './Header/Header';
import Aux from '../../hoc/Aux'


const singlePerk = (props) => {
    // console.log(props.origin);
    const isPerkOwned = props.checkIfPerkOwned(props.data);
    let perk = null;
    let addOrRemove = null;


    //TODO: update when perk is owned
    if (isPerkOwned) {
        addOrRemove = (<button onClick={() => {props.removePerk(props.data)}} >Remove Perk</button>);
    } else {
        addOrRemove = (<button onClick={() => {props.addPerk(props.data)}} >Add Perk</button>);
    }

    if(props.data !== null){
        perk = (
            <Aux>
                <div className='Perk'>
                    <Header size={2} >{props.data.name}</Header>
                    <Header size={3} >{props.data.origin}   ({props.data.cost}cp)</Header>
                    <p>{props.data.description}</p>
                    {addOrRemove}
                </div>
                {props.children}
            </Aux>
        )
    }
    return (
        perk
    )
}

export default singlePerk;