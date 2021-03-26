import React from 'react';
import CatagoryItem from './CategoryItem.js/CategoryItem';

//TODO: move into PerkList folder

const category = (props) => {

    let allPerks = null;

    let categoryItems = {};


    //TODO: tell user when the data is or undifined 
    if(props.data !== null){
        props.category.list.forEach(element => {
            // let tempCategoryItems = {...categoryItems};
            categoryItems[element] = {
                name: element,
                perks: []
            }

            // categoryItems = tempCategoryItems;
        });

        props.data.forEach(perk => {
            categoryItems[perk.domain].perks.push(perk);
        });

        // console.log('props.category');
        // console.log(props.category);

        console.log('categoryItems');
        console.log(categoryItems);

        allPerks = Object.values(categoryItems).map(item => {
            return(
                <CatagoryItem 
                name={item.name} 
                perks={item.perks} 
                clicked={props.clicked}
                />
            )
        });
    }

    return(
        allPerks
    );
}

export default category;