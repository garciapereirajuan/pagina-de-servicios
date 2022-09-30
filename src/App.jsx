import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import infinityLogo from './assets/img/jpg/infinity-logo.png';
import Home from './components/Home'
import OurServices from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/ContactUs'
import { FaHome, FaFacebook } from 'react-icons/fa'
import { BsTranslate } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

import './App.css';

const bgClass = {
  '/': 'background-home',
  '/home': 'background-home',
  '/our-services': 'background-services',
  '/about-us': 'background-about-us',
  '/contact': 'background-contact'
}

const btnClass = {
  '/': 'btn-select',
  '/home': 'btn-select',
  '/our-services': 'btn-select',
  '/about-us': 'btn-select',
}

const titles = {
  '/': 'Infinite Language Studio',
  '/home': 'Infinite Language Studio',
  '/our-services': 'Nuestros servicios',
  '/about-us': '¿Quiénes somos?',
  '/contact': 'Contacto'
}

function App() {
  const [background, setBackground] = useState('')
  const [socialBar, setSocialBar] = useState('')
  const [select, setSelect] = useState('')
  const [title, setTitle] = useState('Infinite Language Studio')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
    }

    setBackground(`${bgClass[location.pathname]} animation`)
    setTimeout(() => {
      setBackground(bgClass[location.pathname])
    }, 1000)

    setTitle(titles[location.pathname])
    setSelect(btnClass[location.pathname])
    setSelect('')
  }, [location])

  window.onscroll = function () {
    var y = window.scrollY;
    if (y >= 0 && socialBar === '') {
      setSocialBar('bg-scroll-social')
    }
    console.log(y)
    if (y < 10) {
      setSocialBar('')
    }
  };

  return (
    <div className="App">
      <div className={`background ${background}`} />
      {/* <div className='opacity' /> */}
      <header className='header-home'>
        <div className={`social ${socialBar}`}>
          <Link to='/contact'>
            <AiFillInstagram size={37} />
          </Link>
          <Link to='/contact'>
            <FaFacebook size={32} />
            {/* <div style={{ marginTop: '2px' }} /> */}
          </Link>
          <Link to='/contact'>
            <IoLogoWhatsapp size={35} />
          </Link>
        </div>
        <div
          className='header-home__logo'
        >
          <Link to='/home'>
            <img src={infinityLogo} alt='Infinite-Language-Studio-Logo' width='350px' style={{ color: 'white' }} />
          </Link>
        </div>
        <div className='header-home__title'>
          {title}
        </div>
      </header>
      <div className='menu'>
        <div
          id='/home'
          className={select}
          onClick={() => navigate('/home')}
        >
          <FaHome />
        </div>
        <div
          id='/our-services'
          className={select}
          onClick={() => navigate('/our-services')}
        >
          Nuestro servicios
        </div>
        <div
          id='/about-us'
          className={select}
          onClick={() => navigate('/about-us')}
        >
          Quiénes somos
        </div>
        <div
          id='/contact'
          className={select}
          onClick={() => navigate('/contact')}
        >
          Contacto
        </div>
        <div
          // id='/'
          className={select}
        // onClick={() => navigate('/')}
        >
          <BsTranslate />
        </div>
      </div>
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/our-services' element={<OurServices />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <div className='slogan'>
          <div>
            “ Trabajamos con un universo infinito de posibilidades
            y conexiones: <span>idiomas</span> ”
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
