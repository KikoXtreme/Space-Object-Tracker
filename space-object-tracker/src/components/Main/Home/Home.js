import { Link } from 'react-router-dom';
import styles from './Home.module.css'

export const Home = () => {
    return (
        <div className="welcome">
            <h3>Space, the final frontier... Where no man has gone before</h3>
            <img src="/assets/space-junk.jpg" alt="Exo Planets Logo" />
            <p>
                The successes of discovering exoplanets in recent decades seem to be telling us that the galaxy is abundant with
                trillions of exoplanets, but finding them isn't easy... <i className="fa fa-globe" aria-hidden="true"></i>
            </p>
            <p>
                The rising population of space debris increases the potential danger to all space vehicles, including to the 
                International Space Station and other spacecraft with humans aboard, such as SpaceX's Crew Dragon.
            </p>
            <div className="logged" >
                <ul>
                    <li><Link to="/users/login">Login</Link></li>
                    <li><Link to="/users/register">Register</Link></li>
                </ul>
            </div>
        </div >
    );
}