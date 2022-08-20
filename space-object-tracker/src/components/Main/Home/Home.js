import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import './home.css'

export const Home = () => {
    const { user } = useContext(UserContext);
    return (

        <div className="welcome">
            <h3>Space, the final frontier... Where no man has gone before</h3>
            <img className="space-objects" src="/assets/space-objects.gif" alt="Space Objects" />
            <p>
                The rising population of known and unknown objects, including space debris increases the potential danger to all
                space vehicles, including to the International Space Station (ISS) and other spacecraft with humans
                aboard. <i className="fa fa-globe" aria-hidden="true"></i>
            </p>
            <div className="logged" >
                {!user.accessToken
                    ?
                    <ul>
                        <li><Link to="/users/register">Register</Link></li>
                        <li><Link to="/users/login">Login</Link></li>
                    </ul>
                    : null
                }
            </div>
        </div >
    );
}