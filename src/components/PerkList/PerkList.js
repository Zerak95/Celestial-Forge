import React from 'react';
// import classes from './PerkList.css';
import Aux from '../../hoc/Aux'


const perkList = (props) => {
    let perkList = null;

    if ( typeof props.data !== 'undefined' && props.data !== null) {
        perkList = props.data.map((item, index) => {
            return (
                <Aux>
                    <li 
                        key={item.perk.id} 
                        onClick={props.clicked.bind(this, item.perk)} 
                    >
                        {item.perk.name} / {item.perk.origin} ({item.perk.cost})
                    </li>
                    <hr/>
                </Aux>
            )
        });
    }

    return (
        <ul>
            {perkList}
        </ul>
    )
}

export default perkList;