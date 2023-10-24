import React from 'react'
import super1 from '../assets/img/super1.jpg'
import '../assets/css/about.css'


const AboutUs = () => {
  return (
    <section id="about" className='about'>
      <div className="section-about container full-lg-screem">
        <article className='img-content-about'>
          <div className='img-card-about'>
            <img className="img-about" src={super1} alt="img-about" />
            <aside className="card-info-about">
              <div className='card-text-about'>
                <h3>Nuestra selección de frutas </h3>
                <p>
                  Comprometidos con los huertos locales
                </p>
              </div>
            </aside>
          </div>
        </article>
        <article className='text-lg-left-about'>
          <aside className="text-center-about text-lg-left-about">
            <h2>Nuestra App actualizada para un minimarket bien abastecido</h2>
          </aside>
          <p>En J & M, nos esforzamos para que siempre encuentres los productos que buscas. Desde frutas y verduras frescas hasta productos lácteos, carnes, panadería y mucho más, te aseguramos la calidad y frescura en cada producto que adquieras en nuestra App.</p>
          <div className="text-center-about text-lg-left-about">
            <a className="btn" href="" target="_blank" rel="noopener">Descargar App</a>
          </div>
        </article>
      </div>
    </section>

  )
}

export default AboutUs