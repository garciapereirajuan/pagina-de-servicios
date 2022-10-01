import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContext } from 'react-flexible-sliding-menu'
import Home from '../Home'
import OurServices from '../Services'
import AboutUs from '../AboutUs'
import Contact from '../ContactUs'
import { BsTranslate } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'

import './Menu.css'

const DashboardSVG = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
);

const Menu = () => {
    const { closeMenu } = useContext(MenuContext);
    const navigate = useNavigate()

    return (
        <div className="Menu">
            <h1>Menu</h1>
            <div
                id='/home'
                onClick={() => { navigate('/home'); closeMenu() }}
            >
                <FaHome /> Inicio
            </div>
            <div
                id='/our-services'
                onClick={() => { navigate('/our-services'); closeMenu() }}
            >
                <DashboardSVG /> Nuestro servicios
            </div>
            <div
                id='/about-us'
                onClick={() => { navigate('/about-us'); closeMenu() }}
            >
                <DashboardSVG /> Quiénes somos
            </div>
            <div
                id='/contact'
                onClick={() => { navigate('/contact'); closeMenu() }}
            >
                <DashboardSVG /> Contacto
            </div>
            <div
            // id='/'
            // onClick={() => navigate('/')}
            >
                <BsTranslate /> Inglés
            </div>
            <button onClick={closeMenu} className='primary-button'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </div>
    )
}

export default Menu
