import React from 'react'
import { Link } from 'react-router-dom'
import GirlOnline from '../../assets/img/jpg/kindle.jpg';

import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Link to='/contact'>
        <div>
          Clases de Idioma online
          <img src={GirlOnline} width={500} />
        </div>
      </Link>
    </div>
  )
}

export default Home
