import React from 'react'
import { Link } from 'react-router-dom'
import infinityLogo from '../../assets/img/jpg/infinity-logo.png'

import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div className='about-us section-content'>
            {/* <div className='border' /> */}
            <p className='subtitle'>Sobre nosotras</p>

            <p>Formadas en la Universidad Nacional de La Plata, donde nos conocimos al final de nuestras carreras universitarias, decidimos tomar rumbo a Mendoza, donde nos reencontramos y nació este proyecto.</p>

            <div className='border' />
            <p>Originaria de Guaminí, Noelia trabaja de manera online y presencial como profesora de inglés en Tupungato, ciudad en la que vive actualmente. Lorena reside en San Rafael y se dedica especialmente a la traducción y corrección, tanto como al subtitulado de material audiovisual. Asimismo, ambas coordinamos capacitaciones para empresas en general, industria y turismo vitivinícola y preparación para exámenes internacionales.</p>

            <div className='border' />
            <p>Como trabajadoras del lenguaje, creemos en el valor de la comunicación no sólo como herramienta de trabajo sino como filosofía de vida.</p>

            <div className='end-text'>
                <Link to='/contact'>
                    Contáctanos
                </Link>
            </div>
        </div>
    )
}

export default AboutUs
