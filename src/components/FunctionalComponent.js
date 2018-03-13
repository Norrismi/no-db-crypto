import React from 'react';

const FunctionalComponent = props => {
    return (
        <div>This {props.price} is a functional component</div>
    )
}

export default FunctionalComponent



/*

On parent: 
<FunctionalComponent price="$5" />


*/