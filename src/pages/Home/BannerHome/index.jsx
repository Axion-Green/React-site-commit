import React from 'react'
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <>
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Sejam bem-vindos !</div>
                    <div className="text-2">Axion Green</div>
                    <div className="text-3">aqui temos <span className="typing"></span></div>
                    <Link to="/selo">Nosso serviço</Link>
                    <img src="./img/Logo.png" alt="Logo" /> 
                </div>
            </div>  
        </section>
    </> 
  )
}

export default Banner