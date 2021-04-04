import React from 'react';
import CatagoryItem from './CategoryItem.js/CategoryItem';

//TODO: move into PerkList folder

const category = (props) => {

    let allPerks = null;
    let categoryItems = {};
    const catagoryName = props.category.name;

    const compare = (a,b) => {
        let order = 1;

        if (!props.ascendingOrder) {
            order = -1;
        }
        if (a.name > b.name) {
            return 1 * order;
        } else if(a.name < b.name) {
            return -1 * order;
        }
    }


    //TODO: tell user when the data is or undifined 
    //TODO:change name to lowercase
    if(props.data !== null && props.category.list.length !== 0){
        props.category.list.forEach(element => {
            // let tempCategoryItems = {...categoryItems};
            categoryItems[element] = {
                name: element,
                perks: []
            }

            // categoryItems = tempCategoryItems;
        });

        props.data.forEach(perk => {
            categoryItems[perk[catagoryName]].perks.push(perk);
        });



        // console.log('props.category');
        // console.log(props.category);

        // console.log('categoryItems');
        // console.log(categoryItems);
        // console.log('Object.values(categoryItems)');
        // console.log(Object.values(categoryItems));

        categoryItems = Object.values(categoryItems);

        categoryItems.sort(compare);

        // console.log('categoryItems');
        // console.log(categoryItems);

        allPerks = categoryItems.map(item => {
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