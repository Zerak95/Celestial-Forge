import React from 'react';

//TODO: move to UI folder
const header = (props) => {

    const style = {
        borderBottom: '1px solid rgba(51,51,51,.2)'
    }

    return (
        // theHeader
        React.createElement(`h${props.size}`, {style: style}, props.children)
    );
}

export default header;