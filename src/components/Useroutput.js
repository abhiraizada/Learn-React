import React from 'react'

const Useroutput = ({name,change}) => {
    return (
        <div>
            <p onClick={change}>this is user output</p>
            <p>{name}</p>
        </div>
    )
}

export default Useroutput
