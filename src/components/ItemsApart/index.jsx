import React from 'react'
import './ItemsApart.css'

export const ItemsApart = ({ photo, superhost, types, beds, rating, title }) => {
    return (
        <div className='apartments'>
            <img src={photo} alt="" className='imagen' />
            <div className='description'>
                <p className='first-line'>{superhost}{types}. {beds} beds</p>
                <p><i className="fa-solid fa-star red-icon "></i>{rating}</p>
            </div>
            <h3 className='second-line'>{title}</h3>
        </div>

    )
}
