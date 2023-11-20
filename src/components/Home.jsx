import React from 'react'
import '../assets/css/home.css'
import planeta from '../assets/img/Planeta.png'


const Home = () => {
  return (
    <section id="inicio" className="section-home container">
      <article className='text-lg-left-home'>
        <aside className='text-center-home text-lg-left-home'>
          <h3 className="home-subtitle">EcoSaver</h3>
          <h1 className="home-title">
          UN FUTURO VERDE EN TUS MANOS </h1>
        </aside>
        <p className="description">¡Bienvenido a EcoSaver, donde la sostenibilidad se encuentra con la acción! ¿Quieres ser parte de un movimiento global hacia un futuro más verde? </p>
        <div className="content-btn-home">
          <a className='btn-home' href='https://www.figma.com/proto/cAFncwWqdwwslz89Cblt74/IOS-Prototype-Studying-Ecology?node-id=15-1831&starting-point-node-id=1%3A2'>
            Descargar App
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </article>
      <article >
        <img className='img-home' src={planeta} alt="planeta"/>
      </article>
    </section>
  )
}

export default Home