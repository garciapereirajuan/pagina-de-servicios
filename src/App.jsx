import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import infinityLogo from './assets/img/jpg/infinity-logo.png';
import OurServices from './components/Services'
import Home from './components/Home'

import './App.css';

const classes = {
  '/': 'background-home',
  '/home': 'background-home',
  '/our-services': 'background-services'
}

function App() {
  const [background, setBackground] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setBackground(`${classes[location.pathname]} animation`)
    setTimeout(() => setBackground(classes[location.pathname]), 1000)
  }, [location])


  return (
    <div className="App">
      <div className={`background ${background}`} />
      {/* <div className='opacity' /> */}
      <header className='header-home'>
        <div
          className='header-home__logo'
        >
          <Link to='/home'>
            <img src={infinityLogo} alt='Infinite-Language-Studio-Logo' width='350px' style={{ color: 'white' }} />
          </Link>
        </div>
        <div className='header-home__title'>
          Infinite Language Studio
        </div>
      </header>
      <div className='menu'>
        <div onClick={() => navigate('/our-services')}>Nuestro Servicios</div>
        <div onClick={() => navigate('/')}>Quiénes Somos</div>
        <div onClick={() => navigate('/')}>Contacto</div>
        <div onClick={() => navigate('/')}>Idioma</div>
      </div>
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/our-services' element={<OurServices />} />
          {/* <Route path='/about-us' element={} /> */}
          {/* <Route path='/contact' element={} /> */}
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
