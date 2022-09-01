import React from 'react'

function Counter(props) {
    const {title,counter} = props;
    return (
        <div><h1>{title}  {counter}</h1></div>
    )
}

export default Counter