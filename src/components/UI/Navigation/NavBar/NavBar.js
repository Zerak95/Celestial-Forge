import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './NavBar.css';

const navBar = (props) => (
    <nav className='NavBar'>
        <NavigationItems listToDisplay={props.listToDisplay} />
    </nav>
);

export default navBar;