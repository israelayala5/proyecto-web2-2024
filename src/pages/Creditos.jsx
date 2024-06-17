import React from 'react';
import './Creditos.css';
import Informatica from '../utils/img/informatica.jpg';

import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';

import Guero from '../utils/img/guero.jpg';
import Futbol from '../utils/img/futbol.jpg';
import LogoDota from '../utils/img/logodota.jpg';
import Galeria2 from '../components/Galeria2';
const Creditos = () => {
  return (
    <div className='home-pages'>


        <header className='mt-5'>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light' style={{ fontSize: '3.5rem' }}>Creditos</h1>
            </div>
        </header>


        <div className="reviews-section container">
        
    <h1 className="text-center mb-5 text-uppercase fw-bold fs-1 ">Carrera de Informatica - U.M.S.A</h1>
    <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Programación Web II  Inf-122</h2>
    <h3 className="text-center mb-5 text-uppercase fw-bold fs-1">Restaurante de comida Mexicana</h3>
     <h4 className="text-center mb-5 text-uppercase fw-bold fs-1">Lic.Miguel Ángel Mendoza Castro</h4>
    <div className="row g-4">
        <div className="israel">
            <Card className="h-100 shadow custom-card">
                <CardBody className="custom-card-body">
                    <div className="p-4" style={{ fontSize: '1.5rem' }}>
                        <CardText>
                            <h4>Estudiante:</h4>
                            <p>Israel Ayala M.</p>
                            <h4>C.I:</h4>
                            <p>9937434 l.p</p>
                            <h4>Registro Universitario:</h4>
                            <p>1822121</p>
                            <h4>Carrera: </h4>
                            <p>Informática</p>
                          
                        </CardText>
                    </div>
                </CardBody>
                <CardFooter className="custom-card-footer">
                    <img src={Guero} className="img-fluid rounded-circle mx-4 shadow" alt="" />
                    <CardTitle className="text-success">MASCOTA</CardTitle>
                </CardFooter>
                <CardFooter className="custom-card-footer">
                    <img src={Futbol} className="img-fluid rounded-circle mx-4 shadow" alt="" />
                    <CardTitle className="text-success">DEPORTE</CardTitle>
                </CardFooter>
                <CardFooter className="custom-card-footer">
                    <img src={LogoDota} className="img-fluid rounded-circle mx-4 shadow" alt="" />
                    <CardTitle className="text-success">VIDEO JUEGO</CardTitle>
                </CardFooter>
            </Card>
        </div>
      
    </div>
</div>


            <div className='container my-5'>
                <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                <div className="my-3">
                        <img src={Informatica} className="img-fluid" alt="" />
                    </div>
                    </div>
              
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold' style={{color: '#0C826D'}}>Carrera de Informática</h2>
                        <p>Creada en 1973, la primera Carrera en el Sistema Universitario Boliviano, pionera en el campo de la Informática con el objetivo primordial de la formación profesional con excelencia. En su plan curricular se encuentran asignaturas de Ciencias de la Computación, Informática, Matemáticas, Sistemas y Gestión conforme a las necesidades del mercado profesional.</p>
                         <p>En el Instituto de Investigaciones de Informática los Docentes también realizan actividades de investigación enmarcadas en las líneas de investigación, las exigencias de la sociedad, la evolución de la ciencia y tecnología informática. Así como la interacción social para la difusión y capacitación de la informática en la sociedad, que permita la inclusión social y reduzca la brecha digital.</p>
                         <p>randes y nuevos son los retos y roles que debe enfrentar la Carrera de Informática para estar a la par del desarrollo tecnológico, mejorar la calidad de los planes académicos y el proceso de enseñanza-aprendizaje.

</p>
                    </div>
                </div>
            </div>
            <Galeria2/>
             
  </div>
  
  );
}

export default Creditos;
