import React from 'react';
import classes from './PerkList.css';
import Aux from '../../hoc/Aux'


const perkList = (props) => {
    let perkList = null;

    if ( typeof props.data !== 'undefined' && props.data !== null) {
        perkList = props.data.map((item, index) => {
            return (
                <Aux>
                    <li 
                        key={item.id} 
                        // TODO: check if you should use bind or anonymous function
                        onClick={() => {props.clicked(item)}} 
                    >
                        {item.name} / {item.origin} ({item.cost})
                    </li>
                    <hr/>
                </Aux>
            );
        });
    }

    return (
        <ul className='PerkList' >
            {perkList}
        </ul>
    )
}

export default perkList;