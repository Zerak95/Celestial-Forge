import React from 'react';
import classes from './Perk.css';
import Header from './Header/Header';
import Aux from '../../hoc/Aux'
import SinglePerk from './SinglePerk';


const perk = (props) => {
    let perk = null

    
    //TODO: tell user when the data is or undifined 
    if(props.data !== null){
        if (!props.data.single_perk) {
            perk = props.data.extra_perks.map(perk => {
                return (<SinglePerk data={perk}/>);
            });
        }else{
            perk = (
                <SinglePerk data={props.data}/>
            )
        }
    }
    return (
        perk
    )
}

export default perk;