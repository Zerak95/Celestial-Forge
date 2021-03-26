import React from 'react';

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
    }

    return(
        allPerks
    );
}

export default category;