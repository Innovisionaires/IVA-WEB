import '../styles/team.css';
import ph from '../assets/delight.jpg';

const Team = () => {
    return (
        <div className="team" id="team">
            <p className="title">Meet the team</p>
            <div className="team-row">
                <div className="user">
                        <div className="img-container">
                            <img src={ph} alt="" />
                        </div>
                        <p className="username">Seun Joseph</p>
                        <p className="role">Founder</p>
                </div>

                <div className="user">
                    <div className="img-container">
                        <img src={ph} alt="" />
                    </div>
                    <p className="username">Esther</p>
                    <p className="role">COO</p>
                </div>

                <div className="user">
                    <div className="img-container">
                        <img src={ph} alt="" />
                    </div>
                    <p className="username">Delight Olu-Olagbuji</p>
                    <p className="role">Lead Backend Developer</p>
                </div>

                <div className="user">
                    <div className="img-container">
                        <img src={ph} alt="" />
                    </div>
                    <p className="username">Feranmi</p>
                    <p className="role">Backend Developer</p>
                </div>

                <div className="user">
                    <div className="img-container">
                        <img src={ph} alt="" />
                    </div>
                    <p className="username">Ebuka</p>
                    <p className="role">Mobile Developer</p>
                </div>

                <div className="user">
                    <div className="img-container">
                        <img src={ph} alt="" />
                    </div>
                    <p className="username">Oluwabamise</p>
                    <p className="role">Lead UI/UX Designer</p>
                </div>

                <div className="user">
                    <div className="img-container">
                        <img src={ph} alt="" />
                    </div>
                    <p className="username">OroOluwa</p>
                    <p className="role">UI/UX Designer</p>
                </div>
            </div>
        </div>
    )
}

export default Team;