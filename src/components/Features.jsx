import '../styles/features.css';
import FeatureImage from '../assets/app.png';


const Features = () => {

    return (
        <div className='features' id='features'>
            <span>App Features</span>
            <h1>Amazing features we have to offer</h1>

            
            <div className="features-container">
            <div className="feature">
                <div className="feature-image">
                    <img src={FeatureImage} alt="" />
                </div>
                <div className="feature-info">
                    <p className='title'>Interactive Learning</p>
                    <p className="subtitle">Learn interacively with the IVA Academy app</p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-image">
                    <img src={FeatureImage} alt="" />
                </div>
                <div className="feature-info">
                    <p className='title'>AI-based Learning</p>
                    <p className="subtitle">Learn interacively with the IVA Academy app</p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-image">
                    <img src={FeatureImage} alt="" />
                </div>
                <div className="feature-info">
                    <p className='title'>Community</p>
                    <p className="subtitle">Learn interacively with the IVA Academy app</p>
                </div>
            </div>

            <div className="feature">
                <div className="feature-image">
                    <img src={FeatureImage} alt="" />
                </div>
                <div className="feature-info">
                    <p className='title'>Interactive Learning</p>
                    <p className="subtitle">Learn interacively with the IVA Academy app</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Features;