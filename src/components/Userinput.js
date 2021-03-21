import React from 'react'

const Userinput = ({name, change}) => {
    console.log(name)
    return (
        <div>
            <input 
            type="text" 
            id="fname" 
            onChange={change} 
            name="fname" 
            placeholder="user input" 
            value={name}></input>
        </div>
    )
}

export default Userinput
