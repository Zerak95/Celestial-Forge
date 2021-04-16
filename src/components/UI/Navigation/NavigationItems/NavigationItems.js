import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';


const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem>All Perks</NavigationItem>
        <NavigationItem>Perks to</NavigationItem>
        <NavigationItem>Owned Perks</NavigationItem>
    </ul>
)

export default navigationItems;