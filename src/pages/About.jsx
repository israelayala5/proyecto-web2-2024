import React from 'react';
import './About.css';
import Chef0 from '../utils/img/chef0.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';
import Multimedia from '../components/Multimedia';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                <h1 className='text-light' style={{ fontSize: '3.5rem' }}>Nosotros</h1>
                </div>
            </header>

            <div className='container my-5'>
                <h1 className='textt' style={{ color: '#0C826D', textAlign: 'center', fontFamily: 'Poppins, sans-serif'}}>PICO MÁGICO RESTAURANT</h1>
                <p>En el corazón de nuestra cultura, donde la tradición se mezcla con la creatividad, nace Pico Mágico. Nuestro restaurante es un rincón encantado donde los sabores auténticos de México se presentan con un toque de magia, invitándote a un viaje culinario inolvidable.</p>
                <p>Cada plato es una obra de arte, elaborada con ingredientes frescos y recetas tradicionales, pero con un giro único que despierta la imaginación y deleita el paladar.</p>
                <p>Al cruzar nuestras puertas, te encontrarás en un espacio que mezcla la calidez y la alegría de una fiesta mexicana con detalles mágicos. Desde luces de colores hasta murales vibrantes, cada rincón está diseñado para transportarte a un mundo lleno de encanto y diversión.</p>
                <p>Más que una comida, ofrecemos una experiencia completa. Disfruta de nuestras noches temáticas, donde la música en vivo, las presentaciones de mariachis y los espectáculos de danza te sumergirán en la rica cultura mexicana.</p>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={Chef0} className='img-fluid my-5' alt="" />
                    </div>
                    <div className='col-lg-6'>
                    <Multimedia/>
                    </div>
                </div>
                <p>Nuestro personal, siempre sonriente y atento, está aquí para hacer que tu visita sea especial. Nos esforzamos por brindarte un servicio cálido y acogedor, para que te sientas como en casa, pero con un toque de magia.</p>
                <p>Te invitamos a sumergirte en una experiencia culinaria mágica, donde cada bocado cuenta una historia y cada visita es una celebración. Ven con tu familia, amigos o esa persona especial y descubre por qué Pico Mágico es más que un restaurante: es un lugar donde la magia y la tradición mexicana se encuentran.</p>
            </div>

            <div className='bgx text-light'>
                <ImageGallery />
            </div>

            <div className='my-5' style={{  color: '#0C826D'}}>
                <Reviews />
            </div>
        </div>
    )
}

export default About;