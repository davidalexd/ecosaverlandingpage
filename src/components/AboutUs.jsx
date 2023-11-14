import React from 'react'
import super1 from '../assets/img/ecosaverMision.jpg'
import '../assets/css/about.css'


const AboutUs = () => {
  return (
    <section id="nosotros" className='about'>
      <div className="section-about container full-lg-screem">
        <h2 className='cols-span-2'>Acerca de nosotros</h2>
        <article className='text-lg-left-about'>
          <aside className="text-center-about text-lg-left-about">
            <h2>Misión</h2>
          </aside>
          <p>ENuestra misión es educar, inspirar y habilitar a las personas para llevar un estilo de vida más sostenible. Proporcionamos herramientas y recursos para reducir el impacto ambiental en la vida diaria. Cada pequeña acción cuenta en nuestra búsqueda de un futuro más verde y equilibrado, donde todos sean defensores activos de la sostenibilidad.</p>
          <aside className="text-center-about text-lg-left-about">
            <h2>Visión</h2>
          </aside>
          <p>
            Visualizamos un mundo donde comunidades se unen contra el desperdicio y la sobreexplotación de recursos naturales. EcoSaver es la guía personalizada para reducir el desperdicio, con información y soluciones prácticas. Inspiramos cambios de hábitos y medimos impacto, promoviendo un futuro más verde y equilibrado, acción a acción.
          </p>
        </article>
        <article className='img-content-about'>
          <div className='img-card-about'>
            <img className="img-about" src={super1} alt="img-about" />
            <aside className="card-info-about">
              <div className='card-text-about'>
                <h3>El planeta esta en nuestras manos</h3>
                <p>
                  Comprometidos con el bienestar sostenible
                </p>
              </div>
            </aside>
          </div>
        </article>

      </div>
    </section>

  )
}

export default AboutUs