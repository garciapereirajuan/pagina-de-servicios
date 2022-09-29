import React from 'react'
import GirlOnline from '../../assets/img/jpg/kindle.jpg';

import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div>
        Clases de Idioma online
        <img src={GirlOnline} width={500} />
      </div>
    </div>
  )
}

export default Home
