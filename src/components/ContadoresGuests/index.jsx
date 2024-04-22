import React from 'react'

export const ContadoresGuests = ({ cajaContador, nombreContador, detallesContador, onDecrement, numContador, onIncrement }) => {
    return (
        <>
            <div className={cajaContador}>
                <h2 className='h2Contador'>{nombreContador}</h2>
                <h3 className='h3Contador'>{detallesContador}</h3>
                <div className='contadorAdults'>
                    <button className='contadorMenorA' onClick={onDecrement}>-</button>
                    <span className='contadorNumA'>{numContador}</span>
                    <button className='contadorMayorA' onClick={onIncrement}>+</button>
                </div>
            </div>
        </>
    )
}
