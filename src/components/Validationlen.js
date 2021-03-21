import React from 'react'

const Validationlen = ({name}) => {

    let msg = ''
    if( name.split('').length >5 ){
        msg = 'Text Long Enough'
    }
    else{
        msg = 'Text too short'
    }
    return(
        <div>
            {msg}
        </div>
    )
}

export default Validationlen
