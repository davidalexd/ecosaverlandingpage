import React from 'react'
import super6 from '../assets/img/chanchito.png'
const AboutDetails = () => {
  return (
    <section id="recompensas" className='about-details' >
      <div className="section-about-details container full-lg-screem ">
        <h2 className='cols-span-12'>¡Gana mientras Cuidas el Planeta!</h2>
        {/* <article className='cols-span-6 img-content-about'>
          <img className="img-about" src={super6} alt="img-about" />
        </article> */}

        <div className='cols-span-6 img-card-about'>
          <img className="img-about" src={super6} alt="img-about" />
          <aside className="card-info-about">
            <div className='card-text-about'>
              <h3>Descargar</h3>
              <a href={'https://www.figma.com/proto/XtwgOC0pSULk1IiVc6oWtJ?page-id=0%3A1&type=design&node-id=302-1590&t=jRMAkIPUwfVwirSZ-0&scaling=min-zoom'}  className='button-app'>
                Android
              </a>
              <a href={'https://www.figma.com/proto/cAFncwWqdwwslz89Cblt74/IOS-Prototype-Studying-Ecology?node-id=15-1831&starting-point-node-id=1%3A2'} className='button-app'>
                Ios
              </a>
            </div>
          </aside>
        </div>


        <article className='cols-span-6 text-lg-left-about'>
          <aside className="text-center-about text-lg-left-about">
            <h3 className='text-about-details'> ¿Cómo funciona?</h3>
          </aside>
          <div className='subcontent-about'>
            <p>
              1. Realiza tareas sostenibles, como reciclar o ahorrar energía.</p>
            <p>
              2. Gana puntos por cada tarea completada.</p>
            <p>
              3. Canjea tus puntos por increíbles recompensas virtuales.</p>
          </div>
          <p>
            ¡Es así de simple! Motívate a ti mismo y a otros estudiantes para cuidar el planeta mientras obtienes recompensas. ¡Únete a la revolución sostenible y comienza a ganar hoy mismo!
          </p>

        </article>
        <article className='cols-span-4'>  <h3 className='text-about-details'>Paso 1: Descarga la App</h3>
          <p>
            Obtén nuestra aplicación en tu dispositivo (iOS/Android).
          </p>
        </article>
        <article className='cols-span-4'>  <h3 className='text-about-details'>Paso 2: Realiza Tareas Sostenibles</h3>
          <p>♻️ Completa acciones ecológicas y acumula puntos. ♻️</p>
        </article>
        <article className='cols-span-4'>  <h3 className='text-about-details'> Paso 3: Comienza a ganar</h3><p>
          🎁 Canjea tus puntos por recompensas emocionantes. 🎁</p></article>

      </div>
    </section >
  )
}

export default AboutDetails



