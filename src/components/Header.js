import React from 'react'
import '../css/header.css';

function Header({children}) {
  return (
    <header className="header-container">        
        <h1 className='header-title'> Listado de Pokemon</h1>
        <section className='header-actions'>
            {children}
        </section>
    </header>
  );
}

export {Header};