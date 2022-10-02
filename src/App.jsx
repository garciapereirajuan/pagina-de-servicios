import { useEffect, useState, useContext } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
// import infinityLogo from './assets/img/jpg/infinity-logo.png';
import InfinityLogo from './assets/svg/infinity.svg'
import Home from './components/Home'
import OurServices from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/ContactUs'
import { BsTranslate } from 'react-icons/bs'
import { FaHome, FaFacebook, FaCopyright } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { BsLightbulbFill } from 'react-icons/bs'
import { MdMailOutline } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { motion } from 'framer-motion'
import { MenuContext } from 'react-flexible-sliding-menu'

import './App.css';

function App() {
  const [background, setBackground] = useState('')
  const [socialBar, setSocialBar] = useState('')
  const [select, setSelect] = useState('')
  const [title, setTitle] = useState('Infinite Language Studio')
  const [lang, setLang] = useState('es')
  const location = useLocation()
  const navigate = useNavigate()
  const { toggleMenu } = useContext(MenuContext)

  useEffect(() => {

    const bgClass = {
      [`/${lang}/`]: 'background-home',
      [`/${lang}/home`]: 'background-home',
      [`/${lang}/our-services`]: 'background-services',
      [`/${lang}/about-us`]: 'background-about-us',
      [`/${lang}/contact`]: 'background-contact'
    }

    const btnClass = {
      [`/${lang}/`]: 'btn-select',
      [`/${lang}/home`]: 'btn-select',
      [`/${lang}/our-services`]: 'btn-select',
      [`/${lang}/about-us`]: 'btn-select',
    }

    const titles = {
      [`/${lang}/`]: 'Infinite Language Studio',
      [`/${lang}/home`]: 'Infinite Language Studio',
      [`/${lang}/our-services`]: lang === 'es' ? 'Nuestros servicios' : 'Our services',
      [`/${lang}/about-us`]: lang === 'es' ? '¿Quiénes somos?' : 'About us',
      [`/${lang}/contact`]: lang === 'es' ? 'Contacto' : 'Contact us'
    }

    window.scrollTo(0, 0)

    const element = document.querySelectorAll('.animation')[0]
    if (element) {
      element.classList.remove('.animation')
    }

    const bg = bgClass[location.pathname]

    setBackground(`${bg} animation`)
    document.querySelectorAll('.content')[0].classList.add('animation-content')

    setTimeout(() => {
      document.querySelectorAll('.animation')[0].classList.remove('animation')
      document.querySelectorAll('.content')[0].classList.remove('animation-content')
    }, 355)

    setTitle(titles[location.pathname])
    setSelect(btnClass[location.pathname])
    setSelect('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, lang])

  useEffect(() => {

  }, [lang])

  useEffect(() => {
    const langStorage = localStorage.getItem('lang')

    if (!langStorage) {
      localStorage.setItem('lang', 'es')
      if (location.pathname === '/') {
        navigate(`/es/home`)
      }
      return
    }

    if (langStorage) {
      setLang(langStorage)
      if (location.pathname === '/') {
        navigate(`/${langStorage}/home`)
      }
    }

  }, [lang, location, navigate])
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
      <header className='header-home'>
        {/* <div className={`social ${socialBar}`}>
          <a href='mailto:no-reply@example.com'>
            <AiFillInstagram size={37} />
          </a>
          <Link to='/contact'>
            <FaFacebook size={32} />
          </Link>
          <Link to='/contact'>
            <IoLogoWhatsapp size={35} />
          </Link>
        </div> */}
        <div
          className='header-home__logo'
        >
          <Link to={`/${lang}/home`}>
            {/* <InfinityLogo /> */}
            {/* <img src={InfinityLogo} alt='Infinite-Language-Studio-Logo' width='350px' /> */}
            <svg version="1.1" id="Layer_1" x="0px" y="0px"
              viewBox="0 0 2703.214 1272.608">
              <g>
                <g>
                  <path d="M72.373,651.52C62.109,212.429,541.276-95.972,961.842,145.033c138.551,79.397,256.167,196.988,382.632,325.418
                  c5.749,5.839,8.404,5.236,13.785-0.188c197.808-199.402,484.222-503.454,885.399-385.157
                  c168.833,49.784,286.15,159.321,346.255,324.377c201.16,552.413-375.869,1009.769-870.693,706.588
                  c-124.801-76.466-232.581-181.978-359.98-311.726c-6.801-6.927-9.868-5.946-16.086,0.324
                  c-144.739,145.956-300.538,304.607-492.977,371.024C458.575,1310.846,83.17,1077.492,72.373,651.52z M317.418,643.008
                  c12.485,253.639,207.59,371.88,415.468,326.918c179.653-38.857,330.36-196.86,458.721-328.811c4.325-4.446,1.9-6.251-1.072-9.025
                  c-111.488-104.066-220.365-231.184-357.581-296.6C567.01,208.705,316.523,394.639,317.418,643.008z M2385.265,632.288
                  c-7.903-245.124-201.289-378.703-424.132-326.433c-175.334,41.126-325.161,198.381-449.641,326.279
                  c-4.318,4.437-2.66,6.509,0.879,9.811c155.637,145.245,339.3,374.567,587.443,332.772
                  C2265.103,946.877,2385.634,802.91,2385.265,632.288z"/>
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <div className='header-home__title'>
          {title}
        </div>
      </header>
      <div className={`menu-slider ${socialBar}`}>
        <div onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>
      <div className='menu'>
        <div
          id={`/${lang}/home`}
          className={select}
          onClick={() => navigate(`/${lang}/home`)}
        >
          <FaHome />
        </div>
        <div
          id={`/${lang}/our-services`}
          className={select}
          onClick={() => navigate(`/${lang}/our-services`)}
        >
          {lang === 'es' ? 'Nuestros servicios' : 'Our services'}
        </div>
        <div
          id={`/${lang}/about-us`}
          className={select}
          onClick={() => navigate(`/${lang}/about-us`)}
        >
          {lang === 'es' ? 'Quiénes somos' : 'About us'}
        </div>
        <div
          id={`/${lang}/contact`}
          className={select}
          onClick={() => navigate(`/${lang}/contact`)}
        >
          {lang === 'es' ? 'Contacto' : 'Contact us'}
        </div>
        <div
          // id='/'
          className={select}
          onClick={() => {
            const path = location.pathname.split('/')[2]
            console.log(path)

            if (lang === 'es') {
              setLang('en')
              localStorage.setItem('lang', 'en')
              navigate(`/en/${path}`)
            } else {
              setLang('es')
              localStorage.setItem('lang', 'es')
              navigate(`/es/${path}`)
            }
          }
          }
        >
          <BsTranslate />
        </div>
      </div>
      <div className='content'>
        <Routes>
          <Route path={`/${lang}/home`} element={<Home />} />
          <Route path={`/${lang}/our-services`} element={<OurServices lang={lang} />} />
          <Route path={`/${lang}/about-us`} element={<AboutUs />} />
          <Route path={`/${lang}/contact`} element={<Contact />} />
        </Routes>
        <div className='slogan'>
          {
            lang === 'es'
              ? (
                <div>
                  “ Trabajamos con un universo infinito de posibilidades
                  y conexiones: <span>idiomas</span> ”
                </div>
              ) : (
                <div>
                  “ We work with an infinite
                  universe of possibilities
                  and connections: <span>languages</span> ”
                </div>
              )
          }
        </div>
        <div className='footer'>
          <FaCopyright /> 2022 -
          <a
            href='https://juangarciapereira.web.app/projects'
            target='_blank'
            rel='noreferrer'
          >
            JUAN G.P.
          </a>
        </div>
      </div>
    </div >
  );
}

export default App;
