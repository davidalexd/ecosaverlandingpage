import React from 'react'
import '../assets/css/proyect.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import sup1 from '../assets/img/fruit1.jpg'
import sup2 from '../assets/img/fruit2.jpg'
import sup3 from '../assets/img/fruit3.jpg'
import sup4 from '../assets/img/fruit4.jpg'

const Projects = () => {
    return (
        <section id="proyect" className='proyect'>
            <div className="section-proyect  full-lg-screem">
                <div className="proyect-title container" >
                    <h2 className='h2-contacto'>
                        Tu satisfacción es nuestra prioridad
                    </h2>
                    <p className='p-contacto'>En J & M, tu satisfacción es nuestra prioridad. Te invitamos a disfrutar de la comodidad y conveniencia de comprar en nuestro minimarket.</p>
                </div>
                <article className='slide-proyects'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide className="swiper-card">
                            <img src={sup1} />
                            <div className="swiper-card-info">
                                <div className='swiper-card-text'>
                                    <h3>Frutas Tropicales</h3>
                                    <p>

                                        Las frutas tropicales traídas por nuestro supermercado son una deliciosa selección de exóticas y jugosas frutas que provienen de regiones tropicales alrededor del mundo.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={sup2} />
                            <div className="swiper-card-info">
                                <div className='swiper-card-text'>
                                    <h3>Variedad de uvas</h3>
                                    <p>

                                        Las uvas traídas por nuestro supermercado son una selección de uvas frescas y jugosas que provienen de viñedos cuidadosamente cultivados.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={sup3} />
                            <div className="swiper-card-info">
                                <div className='swiper-card-text'>
                                    <h3>Mango papaya</h3>
                                    <p>
                                        El mango papaya que ofrecemos en nuestro supermercado es una fruta tropical exquisita y jugosa que combina las características distintivas del mango y la papaya.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-card">
                            <img src={sup4} />
                            <div className="swiper-card-info">
                                <div className='swiper-card-text'>
                                    <h3>Lorem ipsum dolor sit amet</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </article>
                <article className="footer-proyect container" >
                    <div className='proyect-card'>

                        <p>Variedad</p>
                    </div>
                    <div className='proyect-card'>

                        <p>Frescura y calidad</p>
                    </div>

                    <div className='proyect-card'>

                        <p>Presentación atractiva</p>
                    </div>
                    <div className='proyect-card'>

                        <p>Precios justos</p>
                    </div>
                    <div className='proyect-card'>

                        <p>Atención al cliente</p>
                    </div>
                    <div className='proyect-card'>

                        <p>Limpieza e higiene</p>
                    </div>
                </article >
            </div>
        </section>
    )
}

export default Projects
