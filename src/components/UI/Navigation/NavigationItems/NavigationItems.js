import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

//TODO: might need to change where listToDisplay function is triggered
const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem listToDisplay={props.listToDisplay} listnumber={1} >All Perks</NavigationItem>
        <NavigationItem listToDisplay={props.listToDisplay} listnumber={2} >Perks To OWn</NavigationItem>
        <NavigationItem listToDisplay={props.listToDisplay} listnumber={3} >Owned Perks</NavigationItem>
    </ul>
)

export default navigationItems;