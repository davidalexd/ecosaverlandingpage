import React from 'react'
import '../assets/css/service.css'
import save1 from '../assets/img/save1.png'
import alianza from '../assets/img/save2.png'
import eco from '../assets/img/save3.png'
const Services = () => {
  return (
    <section id="servicios" className='service'>
      <div className="services-section container full-lg-screem">
        <div className="service-title">
          <h2 className='h2-service'>
            Nuestros Servicios
          </h2>

        </div>
        <article>
          <a className='service-card'>
            <img src={save1} alt="Imagen de el servicio para asesoriamiento ambiental brindada por Ecosaver"/>
            <aside className="service-card-info">
              <div>
                <h3>Asesoramiento Ambiental</h3>
                <p className='service-card-p'>
                  Tu Guía hacia un Estilo de Vida Sostenible. Nuestros Expertos te Brindarán Consejos para Reducir tu Impacto Ambiental.
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='service-card'>
            <img src={eco} alt="imagen refencial de ecoSearch una funcionalidad para obtener materiales sostenibles" />
            <aside className="service-card-info">
              <div>
                <h3>SustainaMaterials</h3>
                <p className='service-card-p'>
                  Descubre alternativas ecológicas con EcoSearch y explora materiales sostenibles en SustainaMaterials, todo en un solo lugar.
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='service-card'>
            <img src={alianza}  alt='Imagen de las Alianzas entre la comunidad y ecosaver para la sostenibilidad del planeta'/>
            <aside className="service-card-info">
              <div>
                <h3>EcoConnect,</h3>
                <p className='service-card-p'>
                  Conéctate con Defensores, Comunidades Locales y Grupos Ambientalistas.
                  Coordina y Actúa por el Medio Ambiente.
                </p>
              </div>
            </aside>
          </a>
        </article>
      </div>
    </section>
  )
}

export default Services