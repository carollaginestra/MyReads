import React from 'react'

const Loader = () => { 
    return (
        <div className="loader-gif"> 
            <img src={require('../../icons/loader.gif')} alt="loading, please wait" />
        </div>
    )
}

export default Loader