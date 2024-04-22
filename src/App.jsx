import React, { useEffect, useState } from 'react';
import { ContainerApartment } from './components/Apartments';
import { ItemsApart } from './components/ItemsApart';
import { ContainerSearch } from './components/Buscar';
import { ModalSearch } from './components/ModalSearch';
import { ItemsModal } from './components/ItemsModal';
import rooms from './assets/stays.json';
import './index.css';

function App() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [host, setHost] = useState(rooms);

  const searchFunction = (city, guests) => {
    let newHost = rooms;

    if (city) {
      newHost = newHost.filter(room => room.city.toLowerCase().includes(city.toLowerCase()));
    }

    if (guests) {
      newHost = newHost.filter(room => room.maxGuests >= guests);
    }

    setHost(newHost);
  };

  return (
    <>
      <div>
        <div className='encabezado'>
          <header>
            <div className='container-logo'>
              <h2 className='logo-text'><img src="public/logo.png" alt="logo" className='logo-img' />windbnb</h2>
            </div>
            <ContainerSearch setAccion={() => setIsOpenSearch(true)} />
            {
              isOpenSearch &&
              <ModalSearch >
                <ItemsModal setIsOpen={() => setIsOpenSearch(false)} setCity={searchFunction} />
              </ModalSearch>
            }
          </header>
        </div>
        <div className='cuerpo'>
          <div className='sub-cuerpo'>
            <h2 className='place-stays'>Stays in Finland</h2>
            <p className='num-stays'>{host.length}+ stays</p>
          </div>
          <ContainerApartment>
            {
              host && host.map(item =>
                <ItemsApart key={item.id}
                  photo={item.photo}
                  superhost={item.superHost && <nav>SUPER HOST</nav>}
                  types={item.type}
                  beds={item.beds}
                  rating={item.rating}
                  title={item.title}
                />
              )
            }
          </ContainerApartment>
        </div>
      </div>
    </>
  );
}

export default App;