
import React, { useState } from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';

import ChilaquilImg from '../utils/img/chilaquilesverdes.jpg';
import HuevoImg from '../utils/img/rancheros.jpg';
import MolletesImg from '../utils/img/molletes.jpg';

import PastorImg from '../utils/img/pastor.jpg';
import SuizaImg from '../utils/img/suiza.jpg';
import TostadasImg from '../utils/img/tostadas.jpg';

import PozoleImg from '../utils/img/pozole.jpg';
import TamalImg from '../utils/img/tamal.jpg';
import PibilImg from '../utils/img/pibil.jpg';

import HorchataImg from '../utils/img/horchata.jpg';
import JamaicaImg from '../utils/img/jamaica.jpg'
import MargaritaImg from '../utils/img/margarita.jpg'




const breakfast = [
    {
        id: 1,
        name: 'Chilaquiles Verdes',
        description: 'Tortillas de maíz fritas bañadas en salsa verde, acompañadas de pollo deshebrado, crema, queso fresco y cebolla.',
        price: '$8.99',
        img: ChilaquilImg
    },
    {
        id: 2,
        name: 'Huevos Rancheros',
        description: 'Tortillas de maíz cubiertas con huevos fritos, salsa ranchera, frijoles refritos, queso fresco y aguacate.',
        price: '$7.49',
        img:HuevoImg
    },
    {
        id: 3,
        name: 'Molletes',
        description: 'Pan bolillo untado con frijoles refritos y cubierto de queso gratinado, servido con pico de gallo y jalapeños.',
        price: '$6.99',
        img: MolletesImg
    }
];

const lunch = [
    {
        id: 1,
        name: 'Tacos al Pastor',
        description: 'Tacos de carne de cerdo marinada con adobo de chiles secos, piña, cilantro y cebolla, servidos con limón y salsa.',
        price: '$2.50 por taco',
        img1:PastorImg
    },
    {
        id: 2,
        name: 'Enchiladas Suizas',
        description: 'Tortillas de maíz rellenas de pollo deshebrado, bañadas en salsa verde, gratinadas con queso y acompañadas de arroz y frijoles.',
        price: '$10.99',
        img1:SuizaImg

    },
    {
        id: 3,
        name: 'Tostadas de Tinga',
        description: 'Tostadas de maíz con pollo deshebrado en salsa de chipotle, lechuga, crema, queso fresco y aguacate.',
        price: '$9.50',
        img1:TostadasImg
    }
];

const dinner = [
    {
        id: 1,
        name: 'Pozole Rojo',
        description: 'Sopa de maíz grande con carne de cerdo, servida con rábanos, lechuga, cebolla, limón y tostadas.',
        price: '$12.99',
        img2:PozoleImg
    },
    {
        id: 2,
        name: 'Tamales de Oaxaca',
        description: 'Tamales rellenos de mole negro y pollo, envueltos en hojas de plátano, acompañados de arroz y frijoles.',
        price: '$11.50',
        img2:TamalImg
    },
    {
        id: 3,
        name: 'Cochinita Pibil',
        description: 'Carne de cerdo adobada en achiote y jugo de naranja, cocida al horno bajo tierra, servida con cebolla encurtida y tortillas de maíz.',
        price: 'Precio: $13.50',
        img2:PibilImg
    } 
];

const drink = [
    {
        id: 1,
        name: 'Horchata',
        description: 'Bebida dulce a base de arroz, leche, vainilla y canela',
        price: '$3.50',
        img3:HorchataImg
    },
    {
        id: 2,
        name: 'Agua de Jamaica',
        description: 'Infusión fría de flores de Jamaica con azúcar y limón.',
        price: '$2.99',
        img3:JamaicaImg
    },
    {
        id: 3,
        name: 'Margarita Clásica',
        description: 'Coctel a base de tequila, triple sec, jugo de limón y hielo.',
        price: 'Precio: $7.99',
        img3:MargaritaImg
    } 
];

function Menu() {
    const [selectedImg, setSelectedImg] = useState(ChilaquilImg); // Estado para la imagen seleccionada
    const [selectedImg1, setSelectedImg1] = useState(PastorImg); // Estado para la imagen seleccionada
    const [selectedImg2, setSelectedImg2] = useState(PozoleImg); // Estado para la imagen seleccionada
    const [selectedImg3, setSelectedImg3] = useState(HorchataImg); // Estado para la imagen seleccionada


    
    return (
        <div className='menu-page'>
        <header className='mt-5'>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light' style={{ fontSize: '3.5rem' }}>Menu</h1>
            </div>
        </header>

        <div className='breakfast my-5'>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold' style={{ color: '#0C826D' }}>Desayuno</h2>
                <div className='row flex-column-reverse flex-lg-row'>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={selectedImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="Selected Dish" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {breakfast.map((item) => (
                            <div key={item.id} className='card-effect' onClick={() => setSelectedImg(item.img)}>
                                <Card className='border-0'>
                                    <CardBody className="card1">
                                        <CardTitle className='text-center fs-3'>
                                            {item.name}
                                        </CardTitle>
                                        <CardText className='text-center fs-5'>
                                            {item.description}
                                        </CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'>
                                            {item.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


        <div className='lunch bg text-light py-5'>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold' style={{ color: '#ffffff' }}>Almuerzo</h2>
                <div className='row'>
                  <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={selectedImg1} className='img-fluid w-75 mt-4 mt-lg-0' alt="Selected Dish" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {lunch.map((item) => (
                            <div key={item.id} className='card-effect' onClick={() => setSelectedImg1(item.img1)}>
                                <Card className='border-0 text'>
                                    <CardBody className="card2">
                                        <CardTitle className='text-center fs-3'>
                                            {item.name}
                                        </CardTitle>
                                        <CardText className='text-center fs-5'>
                                            {item.description}
                                        </CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'>
                                            {item.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className='dinner my-5'>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold' style={{ color: '#0C826D' }}>Cena</h2>
                <div className='row flex-column-reverse flex-lg-row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={selectedImg2} className='img-fluid w-75 mt-4 mt-lg-0' alt="Selected Dish" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {dinner.map((item) => (
                            <div key={item.id} className='card-effect' onClick={() => setSelectedImg2(item.img2)}>
                                <Card className='border-0'>
                                    <CardBody className="card1">
                                        <CardTitle className='text-center fs-3'>
                                            {item.name}
                                        </CardTitle>
                                        <CardText className='text-center fs-5'>
                                            {item.description}
                                        </CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'>
                                            {item.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className='dessert bg text-light py-5'>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold' style={{ color: '#fffff' }}>Bebidas</h2>
                <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={selectedImg3} className='img-fluid w-75 mt-4 mt-lg-0' alt="Selected Dish" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {drink.map((item) => (
                            <div key={item.id} className='card-effect'>
                                <Card className='border-0 cd text' onClick={() => setSelectedImg3(item.img3)}>
                                    <CardBody className="card2">
                                        <CardTitle className='text-center fs-3'>
                                            {item.name}
                                        </CardTitle>
                                        <CardText className='text-center fs-5'>
                                            {item.description}
                                        </CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'>
                                            {item.price}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    
}

export default Menu;