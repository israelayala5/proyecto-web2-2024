import React from "react";

export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Ubicación</h2>
            <p className="mb-5">23 Avenida del Sol, Ciudad Ocotlán, Oaxaca OC1 3OC</p>
            <h3>Horario de apertura</h3>
            <p className="m-0">Lunes - Viernes:</p>
               <p>09:00 - 20:00</p>
            <p>Sábado - Domingo: 10:00 - 15:00</p>
            <h1 className='text' style={{ fontSize: '2rem' }}>Contactanos: </h1>
            <p>777772 - 77161712</p>
        </div>
    )
}