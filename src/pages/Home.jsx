import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/galeria7.jpg';
import Carousel1 from '../components/Carousel1';


function Home() {
    return (
       
        <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-sm-4 d-flex d-sm-block flex-column align-items-center'>
                          <h2 className='mb-4 text-white fw-bold' style={{ fontSize: '3.9rem' }}>Bienvenido a</h2>
                            <h1 className='mb-4 text-white fw-bold text-center text-sm-start' style={{ fontSize: '3.9rem' }}>Pico Mágico</h1>
                             <MenuBtn />
                          </div>
                    </div>
                </div>
            </header>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <Carousel1/>
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold' style={{color: '#0C826D'}}>Nosotros</h2>
                        <p>Pico Mágico ofrece a sus clientes una experiencia gastronómica que celebra la rica y diversa tradición culinaria de México. Suele destacarse por una variedad de platos auténticos que representan diferentes regiones del país, desde tacos y enchiladas hasta pozole y mole.</p>
                        <p className='mb-5'>Además de la comida, nuestro restaurant brinda una atmósfera cálida y acogedora que refleja la vibrante cultura mexicana. Esto puede incluir una decoración colorida, música tradicional, y en algunos casos, espectáculos en vivo como música folclórica o bailes.</p>
                        <p>Los clientes pueden esperar una atención personalizada y amigable, así como una amplia selección de bebidas, que a menudo incluyen cócteles tradicionales como margaritas y micheladas, así como una variedad de cervezas mexicanas y aguas frescas.</p>
                        <Link to="/about">
                            <button id="boton" type='button' className='btn btn-outline-success btn-lg'>Mas acerca de nosotros</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Nuestros favoritos</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Platos</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Taco el Pastor</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>10bs - 20bs</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Tlayuda</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>25bs - 40bs</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Chiles en Nogada</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>50bs - 60bs</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Bebidas</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Agua de Horchata</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>5bs - 10Bs</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Agua de Jamaica</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>3bs - 8Bs</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Michelada</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>15Bs - 30bs</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>

            <div className='bgxx'>
                <ImageGallery />
            </div>
            <div className='custom-bg text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
      </footer>
        </div>
        
    )
}

export default Home;

