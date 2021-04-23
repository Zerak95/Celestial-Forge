import React from 'react';
import Aux from '../../hoc/Aux';
import NavBar from '../UI/Navigation/NavBar/NavBar';
import classes from './Layout.css';

//TODO: change to class when state is added. Also change props to this.props
const layout = (props) => {
    return (
        <Aux>
            <NavBar listToDisplay={props.listToDisplay} />
            <main className='Content'>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;