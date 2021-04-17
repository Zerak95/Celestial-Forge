import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className='NavigationItem' onClick={() => {props.listToDisplay(props.listnumber)}}>
        <a>
            {props.children}
        </a>
    </li>
)

export default navigationItem;