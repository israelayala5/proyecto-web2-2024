import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Famoso1 from '../utils/img/famoso1.jpg';
import Famoso2 from '../utils/img/famoso2.jpg';


export function Reviews() {
    return (
        <div className="reviews-section container">
    <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reseña de Famosos</h2>
    <div className="row g-4">
        <div className="col-lg-6">
            <Card className="h-100 shadow custom-card">
                <CardBody className="custom-card-body">
                    <div className="p-4">
                        <CardText>
                            <h6> Comida:</h6>
                            <p>Los Tacos Mágicos fueron absolutamente deliciosos, llenos de sabor y frescura. El Guacamole Encantado preparado en la mesa fue una experiencia divertida y sabrosa.</p>
                            <h6>Servicio:</h6>
                            <p>El servicio fue impecable. Nuestro mesero nos ofreció excelentes recomendaciones y siempre estuvo atento a nuestras necesidades.</p>
                        </CardText>
                    </div>
                </CardBody>
                <CardFooter className="custom-card-footer">
                    <img src={Famoso1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                    <CardTitle className="text-success">Carlos Gutiérrez</CardTitle>
                </CardFooter>
            </Card>
        </div>
        <div className="col-lg-6">
            <Card className="h-100 shadow custom-card">
                <CardBody className="custom-card-body">
                    <div className="p-4">
                        <CardText>
                            <h6>Comida:</h6>
                            <p>Los platos eran exquisitos. Probamos los Tacos Mágicos y las Enchiladas Hechizadas, ambos llenos de sabores auténticos y perfectamente preparados.</p>
                            <h6>Servicio:</h6>
                            <p>Nuestro mesero fue muy atento y amable, asegurándose de que nuestra celebración fuera especial.</p>
                        </CardText>
                    </div>
                </CardBody>
                <CardFooter className="custom-card-footer">
                    <img src={Famoso2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                    <CardTitle className="text-success">Ana López</CardTitle>
                </CardFooter>
            </Card>
        </div>
    </div>
</div>

    )
}