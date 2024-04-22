import React, { useState, useEffect } from 'react';
import { ContadoresGuests } from '../ContadoresGuests';
import { ContainerContador } from '../ContainerContador';
import './ItemsModal.css';

export const ItemsModal = ({ setCity, setIsOpen }) => {
    const [isOpenContador, setIsOpenContador] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [totalGuests, setTotalGuests] = useState(0);
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
        updateGuestsInput();
    }, [adults, children]);

    const handleAdultsIncrement = () => {
        setAdults(adults + 1);
    };

    const handleAdultsDecrement = () => {
        if (adults > 0) {
            setAdults(adults - 1);
        }
    };

    const handleChildrenIncrement = () => {
        setChildren(children + 1);
    };

    const handleChildrenDecrement = () => {
        if (children > 0) {
            setChildren(children - 1);
        }
    };

    const updateGuestsInput = () => {
        const total = adults + children;
        setTotalGuests(total);
    };

    const handleContainerClick = (event) => {
        event.stopPropagation();
    };

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    const handleSearchClick = () => {
        setCity(selectedLocation, totalGuests); // Pasar ciudad y total de huéspedes al componente App
        setIsOpen(false); // Cerrar el modal de búsqueda
    };

    return (
        <>
            <div className='nav'>
                <div className='containerLocation'>
                    <div className='location'>
                        <label htmlFor="">Location:</label>
                        <input type="text" name="" id="" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} />
                    </div>
                    <div className='containerLugar'>
                        <ul className='opcionesLugar'>
                            <li className='lipLugar' onClick={() => handleLocationClick('Helsinki, Finland')} ><i className="fa-solid fa-location-dot gray-icon"></i> Helsinki, Finland</li>
                            <li className='lipLugar' onClick={() => handleLocationClick('Turku, Finland')} ><i className="fa-solid fa-location-dot gray-icon"></i> Turku, Finland</li>
                            <li className='lipLugar' onClick={() => handleLocationClick('Oulu, Finland')} ><i className="fa-solid fa-location-dot gray-icon"></i> Oulu, Finland</li>
                            <li className='lipLugar' onClick={() => handleLocationClick('Vaasa, Finland')} ><i className="fa-solid fa-location-dot gray-icon"></i> Vaasa, Finland</li>
                        </ul>
                    </div>
                </div>
                <div className='cuadroGuests'>
                    <div className='containerGuests'>
                        <div className='guests'>
                            <label htmlFor="">Guests:</label>
                            <input type="text" name="" id="guestsInput" onClick={() => setIsOpenContador(true)} placeholder='Add Guests' value={`${totalGuests} `} readOnly />
                        </div>
                        {
                            isOpenContador &&
                            <ContainerContador onClick={handleContainerClick} >
                                <ContadoresGuests
                                    cajaContador='adults'
                                    nombreContador='Adults'
                                    detallesContador='Ages 13 or above'
                                    onDecrement={handleAdultsDecrement}
                                    numContador={adults}
                                    onIncrement={handleAdultsIncrement}
                                />
                                <ContadoresGuests
                                    cajaContador='children'
                                    nombreContador='Children'
                                    detallesContador='Ages 2 - 12'
                                    onDecrement={handleChildrenDecrement}
                                    numContador={children}
                                    onIncrement={handleChildrenIncrement}
                                />
                            </ContainerContador>
                        }

                    </div>
                </div>
                <div className='send'>
                    <button className='buttonSend' onClick={handleSearchClick} ><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
            </div>
        </>
    );
};