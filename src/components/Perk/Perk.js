import React from 'react';
// import classes from './Perk.css';
// import Header from './Header/Header';
// import Aux from '../../hoc/Aux'
import SinglePerk from './SinglePerk';


const perk = (props) => {
    let perk = null

    
    //TODO: tell user when the data is or undifined 
    //TODO: check if there is a way to not have duplicate code
    if(props.data !== null){
        if (!props.data.single_perk) {
            perk = props.data.extra_perks.map(perk => {
                return (
                    <SinglePerk 
                        data={perk}
                        checkIfPerkOwned={props.checkIfPerkOwned}
                        addPerk={props.addPerk}
                        removePerk={props.removePerk}
                    />
                );
            });
        }else{
            perk = (
                <SinglePerk 
                    data={props.data}
                    checkIfPerkOwned={props.checkIfPerkOwned}
                    addPerk={props.addPerk}
                    removePerk={props.removePerk}
                />
            )
        }
    }
    return (
        perk
    )
}

export default perk;