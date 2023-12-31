import { useState } from 'react';
import '../styles/header.css';

const Header = () => {

    const [showSideNav, setShowSideNav] = useState(false)

    function toggle () {
        setShowSideNav(!showSideNav)
    }

    const scroll = (elem) => {
        console.log(elem)
        setShowSideNav(false)
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <header>
            <ul className='brand-name'>
                <li>
                    <a href="/">IVA Academy</a>
                </li>
            </ul>
            <ul className='brand-links'>
                <li>
                    <span onClick={()=>{scroll('solution')}} href="/">Our Solution</span>
                </li>
                <li>
                    <span onClick={()=>{scroll('features')}} href="/">Features</span>
                </li>
                <li>
                    <span onClick={()=>{scroll('team')}} href="/">Meet the Team</span>
                </li>
                <li>
                    <span onClick={()=>{scroll('faq')}} href="/">FAQs</span>
                </li>
            </ul>

            <ul className='cta'>
                <li>
                    <span onClick={()=>{scroll('hero')}} href="/">Join our waitlist</span>
                </li>
            </ul>

            <span onClick={toggle} className="menu-bar">&#8801;</span>
        </header>
        {
            showSideNav &&
            <nav>
                <span onClick={toggle} className="close">&#10006;</span>
                <ul>
                    <li>
                        <span onClick={()=>{scroll('about')}} href="/">About</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('solution')}} href="/">Our Solution</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('features')}} href="/">Features</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('team')}} href="/">Meet the Team</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('countdown')}} href="/">Countdown</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('faq')}} href="/">FAQs</span>
                    </li>
                </ul>
            </nav>
        }
        </>
    )
}

export default Header;