import React from 'react'
import { Link } from 'react-router-dom'

import './OurServices.scss'

const OurServices = () => {
    return (
        <div className='section-content services'>
            {/* <div className='border' /> */}
            <p className='subtitle'>Clases de idioma online</p>

            <p>La modalidad online resulta ser cada vez más viable para más estudiantes en todo el mundo. Con años de experiencia en ella, ofrecemos cursos ESL en todos los niveles, clases individuales y grupales y capacitaciones para empresas. Contamos con cursos a medida y ofrecemos un servicio personalizado y flexible, siempre priorizando los intereses de nuestros alumnos.</p>

            <div className='border' />
            <p className='subtitle'>Capacitaciones para exámenes internacionales</p>

            <p>La preparación para obtener las certificaciones internacionales de nivel, FCE, CAE, CPE, IELTS o TOEFL, entre otras, es fundamental. Por eso, contamos con las herramientas necesarias para guiarte en tu preparación para tomar cualquiera de ellos.</p>

            <div className='border' />
            <p className='subtitle'>Closed Captions y Subtítulos</p>

            <p>Hacemos subtítulos, closed captions, transcripciones y reformats para tu material audiovisual en films, scripts, cortos, documentales, comerciales, entrevistas y conferencias.</p>

            <div className='border' />
            <p className='subtitle'>Traducción y edición</p>

            <p>Traducimos, editamos y corregimos con pasión lingüística y en permanente actualización en el campo literario, académico, audiovisual y empresarial.</p>

            <div className='border' />
            <p className='subtitle'>Descubriendo el mundo de los vinos</p>

            <p>Proximamente ofreceremos cursos y talleres en inglés focalizados en viticultura y el rico idioma de su universo. Ubicadas en la región con el potencial vitivinícola más fuerte del país, nos entusiasma tener el privilegio de generar conexiones junto al mundo de los vinos desde la cuna de la enología local.</p>
            {/* <div className='border' /> */}

            <div className='end-text'>
                <Link to='/contact'>
                    Contáctanos
                </Link>
            </div>
        </div>
    )
}

export default OurServices
