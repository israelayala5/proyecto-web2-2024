import React from "react";
import { Link } from 'react-router-dom';
import './MenuBtn.css';
export function MenuBtn() {
    return (
        <div>
            <Link to="/menu">
                <button type="button" className="btn btn-success btn-lg">Nuestro menú completo</button>
            </Link>
        </div>
    )
}