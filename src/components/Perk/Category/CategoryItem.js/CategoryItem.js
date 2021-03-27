import React from 'react';
import PerkList from '../../../PerkList/PerkList';
import Header from '../../Header/Header';


const categoryItem = (props) => {
    return(
    <div>
        <Header size={1}>{props.name}</Header>
        <PerkList 
            data={props.perks} 
            clicked={props.clicked}
        />
    </div>
    );
}

export default categoryItem;