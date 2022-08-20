import { Link } from 'react-router-dom';
import './about.css'

export const About = () => {
    return (
        <div>
            <div className="imgContainer">
                <img src="/assets/space-junk.jpg" alt="Exo Planets Logo" />
            </div>
            
            <section className="about-content">
                <div className="planet-discovery-logo"><Link to="/"><span>Space Object Tracker</span></Link></div>
                <p>'s primary goals, as described in the NASA Science Plan, are to discover and track all known and unknown objects
                    around Earth, to characterize their properties and to identify their trajectory, speed and threat for humans
                    in space and on Earth.
                </p>
                <p>
                    <Link to="/objects">Find your object now. </Link><i className="fa fa-globe" aria-hidden="true"></i>
                </p>
            </section>

        </div>
    );
}