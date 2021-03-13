import React from 'react';


const header = (props) => {

    const style = {
        borderBottom: '1px solid rgba(51,51,51,.2)'
    }

    
    
    // let theHeader = <h1 style={style}>{props.children}</h1>;

    // if(props.size === 2){
    //     theHeader = <h2 style={style}>{props.children}</h2>;
    // }else {
    //     theHeader = <h3 style={style}>{props.children}</h3>;
    // }

    return (
        // theHeader
        React.createElement(`h${props.size}`, {style: style}, props.children)
    );
}

export default header;