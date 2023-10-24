import React from 'react'
import super6 from '../assets/img/super6.jpg'
const AboutDetails = () => {
  return (
    < section id="details" className='about-details' >
      <div className="section-about-details container full-lg-screem ">
        <article className='text-lg-left-about'>
          <aside className="text-center-about text-lg-left-about">
            <h2 className='text-about-details'> La mejor App de ventas para el minimarket J&M</h2>
          </aside>
          <div className='subcontent-about'>
            <p>
              La mejor App de ventas para el minimarket J&M diseñada para brindarte una experiencia de compra conveniente y eficiente.</p>
            <div className='subcontent-text'>
              <div>
                <h3 className='h3-about'>300+</h3>
                <p className='p-white'>Productos </p>
              </div>
              <div>
                <h3 className='h3-about'>100+</h3>
                <p className='p-white'>Descuentos </p>
              </div>
              <div>
                <h3 className='h3-about'>200+</h3>
                <p className='p-white'>Frutas </p>
              </div>
            </div>
          </div>
        </article>
        <article className='img-content-about'>
          <img className="img-about" src={super6} alt="img-about" />
        </article>
      </div>
    </section >
  )
}

export default AboutDetails



