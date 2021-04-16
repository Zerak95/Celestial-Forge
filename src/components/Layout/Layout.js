import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import NavBar from '../UI/Navigation/NavBar/NavBar';
import classes from './Layout.css';

//TODO: change to class when state is added. Also change props to this.props
class Layout extends Component {
    state = {
        perkListToDisplay: 1
    }

    listOfPerksToDisplayHandler = listNumber => {
        if (listNumber !== this.state.perkListToDisplay) {
            this.setState({perkListToDisplay:listNumber});
        }
    }

    render () {
        return (
            <Aux>
                <NavBar/>
                <main className='Content'>
                    {props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;