import '../styles/about.css';
import AboutImage from '../assets/about.svg';


const About = () => {
    return (
        <div className="about" id='about'>
            <div className="image-container">
                <img src={AboutImage} alt="" />
            </div>
            <div className="text-container">
                <span className="badge">About Us</span>
                <p className='title'>Why use Innovision Academy?</p>
                <p className='sub-title'>
                Lorem ipsum dolor sit amet consectetur. Mauris faucibus tempus feugiat scelerisque proin cursus odio. Ante ac odio arcu tincidunt. Scelerisque est accumsan tristique sollicitudin sit. Pharetra diam lectus sagittis pulvinar enim. Porttitor eros tempus sed faucibus adipiscing id tempor eu mauris. Orci mattis a integer arcu ornare hac.
                </p>
            </div>
        </div>
    )
}

export default About;