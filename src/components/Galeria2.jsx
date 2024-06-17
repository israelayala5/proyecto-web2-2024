import React from 'react'
import Umsa1 from '../utils/img/umsa1.jpg';
import Umsa2 from '../utils/img/umsa2.jpg';
import Umsa3 from '../utils/img/umsa3.jpg';
import Umsa4 from '../utils/img/umsa4.jpg';
import Umsa5 from '../utils/img/umsa5.jpg';
import Umsa6 from '../utils/img/umsa6.jpg';
import './Galeria2.css'; 
export default function Galeria2() {
  return (
    <div className="container py-5">
            <h2 className="text-center fs-1 mb-10 text-uppercase fw-bold" style={{color: '#0C826D'}}>Galeria de Imagenes</h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-5">
                        <img src={Umsa3} className="img-fluidz" alt="" />
                    </div>
                    <div className="my-5">
                        <img src={Umsa2} className="img-fluidz" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Umsa1} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Umsa5} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Umsa4} className="img-fluid" alt="" />
                    </div>
                    <div className="my-5">
                        <img src={Umsa6} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}
