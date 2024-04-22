import React from 'react'
import './ContainerSearch.css'

export const ContainerSearch = ({ setAccion }) => {
    return (
        <div className='container-search' onClick={setAccion} >
            <p className='cityContainer'>Helsinki, Finland</p>
            <p className='guestsContainer'>Add Guests</p>
            <i className="fa-solid fa-magnifying-glass red-icon"></i>
        </div>
    )
}
