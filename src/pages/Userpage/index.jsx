import React from 'react'
import WeatherPanel from '../../components/WeatherPanel';

import BannerUser from './BannerUser'

const Userpage = () => {
  return (
    <>
       <section className="homeS" id="about">
          <div className="max-width">
            <BannerUser/>
            
            <div className='conteudo-card'><WeatherPanel/></div>
            
          </div>
        </section>
    </>
  )
}

export default Userpage