import React from 'react'

const CharComponent = ({data, clicked}) => {

    const mystyle ={
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
}

    return (
        <div style={mystyle} onClick={clicked}>
            {data}
        </div>
    )
}

export default CharComponent
