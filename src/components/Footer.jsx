import React from 'react'
import '../assets/css/footer.css'
import s1 from '../assets/img/twiter.png'
import s2 from '../assets/img/messenger.png'
import s3 from '../assets/img/instagram.png'
import s4 from '../assets/img/fb.png'
const Footer = () => {
    return (
        <footer className="footer">
            <a href='https://twitter.com/home' className="column wider">
                <img src={s1}></img>
                <h4>twitter</h4>

            </a>
            <a href={'https://mail.google.com/'} className="column">
                <img src={s2}></img>
                <h4>gmail</h4>

            </a>
            <a href='https://www.instagram.com/?hl=en' className="column">
                <img src={s3}></img>
                <h4>instagram</h4>
            </a>
            <a href='https://es-la.facebook.com/' className="column wider">
                <img src={s4}></img>
                <h4>facebook</h4>
            </a>
        </footer>
    )
}

export default Footer
{/* <footer className="footer">
<div classNameName='section-footer container'>
    <div classNameName='content-footer-1'>
        <h3 classNameName='h3-footer'> Lorem ipsum dolor.</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div classNameName='content-footer-2'>
        <h3 classNameName='h3-footer'> Lorem ipsum .</h3>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
    </div>
    <div classNameName='content-footer-2'>
        <h3 classNameName='h3-footer'> Lorem ipsum .</h3>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
    </div>
    <div classNameName='content-footer-1'>
        <h3 classNameName='h3-footer'> Lorem ipsum dolor.</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
</div>

</footer> */}