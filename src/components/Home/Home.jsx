import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GirlOnline from '../../assets/img/jpg/kindle.jpg';

import './Home.scss'

const Home = () => {
  const [lang, setLang] = useState(localStorage.getItem('lang'))
  const location = useLocation()

  useEffect(() => {
    const langFromPath = location.pathname.split('/')[1]

    setLang(langFromPath)
  }, [location])

  return (
    <div className='home'>
      <Link to={`/${lang}/our-services`}>
        <div>
          {lang === 'es' ? 'Clases de Idioma online' : 'Online language classes'}
          <img src={GirlOnline} width={500} alt='¡Clases online!' />
        </div>
      </Link>
    </div>
  )
}

export default Home
