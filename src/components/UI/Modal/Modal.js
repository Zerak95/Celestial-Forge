import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    //TODO: remove componentWillUpdate()
    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className='Modal'
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                        <button id="x" onClick={this.props.modalClosed}>
                            X
                        </button>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}


export default Modal;