import Carousel from 'react-bootstrap/Carousel';
import MenuImg1 from  '../utils/img/casa1.jpg';
import MenuImg2 from  '../utils/img/casa2.jpg';
import MenuImg3 from  '../utils/img/casa3.jpg';
import './Carousel1.css';
function Carousel1() {
  return (
    <Carousel className='me-auto justify-content-end w-100'>
  <Carousel.Item>
    <img src={MenuImg3} className='img-fluid w-100 custom-carousel-img' alt="" />
    <Carousel.Caption>
      <h5>Restaurante de especialidad</h5>
      <p>Aqui encontraras una amplia gama de platos frescos.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={MenuImg1} className='img-fluid w-100 custom-carousel-img' alt="" />
    <Carousel.Caption>
      <h5>Mas que un restaurant</h5>
      <p>Informate de nuestras promociones semanales.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={MenuImg2} className='img-fluid w-100 custom-carousel-img' alt="" />
    <Carousel.Caption>
      <h5>No te vayas sin probar nuestra variedad de tacos</h5>
      <p>jugosos con un sabor único ¡volverás seguro!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Carousel1;
