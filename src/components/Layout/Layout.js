import React from 'react';
import Aux from '../../hoc/Aux';

//TODO: change to class when state is added. Also change props to this.props
const layout = (props) => {
    return (
        <Aux>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;