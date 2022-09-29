import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import infinityLogo from './assets/img/jpg/infinity-logo.png';
import OurServices from './components/Services'
import Home from './components/Home'

import './App.css';

const classes = {
  '/home': 'background-home',
  '/our-services': 'background-services'
}

function App() {
  const [background, setBackground] = useState()
  const location = useLocation()

  useEffect(() => {
    setBackground(classes[location.pathname])
  }, [location])

  console.log(location)

  return (
    <div className="App">
      <div className={`background ${background}`} />
      {/* <div className='opacity' /> */}
      <header className='header-home'>
        <div className='header-home__logo'>
          <img src={infinityLogo} width='350px' style={{ color: 'white' }} />
        </div>
        <div className='header-home__title'>
          Infinite Language Studio
        </div>
      </header>
      <div className='menu'>
        <div>Nuestro Servicios</div>
        <div>Quiénes Somos</div>
        <div>Contacto</div>
        <div>Idioma</div>
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
