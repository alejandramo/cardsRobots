import React from 'react';

const Scroll = (props) => {
    return(
    <div style={{overflowY: 'scroll', border: '10px solid #FFEC33',shadow: "4px solid white" ,height: '800px'}}>
    {props.children}
    </div>
    )
}

export default Scroll;