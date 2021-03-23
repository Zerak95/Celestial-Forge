import React from 'react';
import classes from './Perk.css';
import Header from './Header/Header';
import Aux from '../../hoc/Aux'
import SinglePerk from './SinglePerk';


const perk = (props) => {
    // console.log(props.origin);
    let perk = null

    // console.log('THIS is ther perk you selcted');
    // console.log(props.data);
    
    //TODO: tell user when the data is null
    if(props.data !== null){
        if (props.data.single_perk) {
            // console.log('This is a single perk');
            perk = (
                <SinglePerk data={props.data}/>
            )
        }else{
            perk = props.data.extra_perks.map(perk => {
                return (<SinglePerk data={perk}/>);
            });
            // console.log('This is NOT NOT a single perk');
            // console.log(props.data.extra_perks);
        }
    }
    return (
        perk
    )
}

export default perk;