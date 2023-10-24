import React from 'react'
import '../assets/css/service.css'
import fruit from '../assets/img/fruit1.jpg'
import vegetable from '../assets/img/vegetable3.jpg'
import super2 from '../assets/img/fruit3.jpg'
const Services = () => {
  return (
    <section id="service" className='service'>
      <div className="services-section container full-lg-screem">
        <div className="service-title">
          <h2 className='h2-service'>
          Amplio catálogo de productos
          </h2>
          <p className='p-service'>En nuestra tienda virtual, podrás explorar nuestro amplio catálogo de productos, verificar el stock y los precios actualizados.</p>
        </div>
        <article>
          <a className='service-card'>
            <img src={fruit} />
            <aside className="service-card-info">
              <div>
                <h3>Lorem ipsum,</h3>
                <p className='service-card-p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='service-card'>
            <img src={super2} />
            <aside className="service-card-info">
              <div>
                <h3>Lorem ipsum,</h3>
                <p className='service-card-p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
                </p>
              </div>
            </aside>
          </a>
        </article>
        <article>
          <a className='service-card'>
            <img src={vegetable} />
            <aside className="service-card-info">
              <div>
                <h3>Lorem ipsum,</h3>
                <p className='service-card-p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
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




{/*<article>
 <div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article>
<article>
<div>
  <swiper-container class="mySwiper" navigation="true" pagination="true" effect="flip" grab-cursor="true">
    <swiper-slide>
      <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
  </swiper-container>
</div>
<div className='service-card'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
  </svg>
  <h3>Lorem ipsum,</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam hic tenetur recusandae aliquid omnis culpa
  </p>
</div>
</article> */}