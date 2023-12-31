import '../styles/hero.css';
import HeroImage from '../assets/iva-hero.svg';

const Hero = () => {

    return (
        <div className='hero' id='hero'>
            <div className="hero-title">
                <p className='title'>Empower your <span>learning journey</span> at Innovision Academy</p>
                <p className='sub-title'>Learn in-demand skills for free</p>
            </div>

            <div className="waitlist-div">

            <div className="waitlist">
                <input type="email" placeholder='enter your email address' name="" id="" />
                <button type="submit">Join our waitlist</button>
            </div>
            </div>

            <div className="hero-image"><img src={HeroImage} alt="" /></div>
        </div>
    )
}

export default Hero;