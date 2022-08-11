import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
    return (
        // <header>
        //     <nav>
        //         {/* {user.email && <span>{user.email}</span>} */}
        //         <Link to="/catalog">All Objects</Link>
        //         {true//user.email 
        //             ? <div id="user">
        //                 <Link to="/create">Add Object</Link>
        //                 <Link to="/logout">Logout</Link>
        //             </div>
        //             : <div id="guest">
        //                 <Link to="/login">Login</Link>
        //                 <Link to="/register">Register</Link>
        //             </div>
        //         }
        //     </nav>
        // </header>
        <header>
            <div className="mini-navbar-wrap">
                <div className={styles['logo-wrap']}>
                    <p>
                        <Link to="/">
                            Space Object Tracker
                        </Link>
                    </p>
                </div>
                <div className="mini-navbar">
                    <ul>
                        <li> <Link to="/user/login">Login</Link></li>
                        <li> <Link to="/user/register">Register</Link></li>
                    </ul>
                </div>
                <div className="mini-navbar">
                    <ul>
                        <li> <Link to="/user/profile">KIKO's Profile</Link></li>
                        <li> <Link to="/user/logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link> </li>
                    <li><Link to="/objects">Search for an Object</Link></li>
                    <li><Link to="/objects/pagination">Objects</Link></li>
                    <li><Link to="/objects/new">New Discovery</Link></li>
                    <li><Link to="/objects/latest">Latest Discoveries</Link></li>
                    <li><p className="notification">ERROR MESSAGE</p></li>
                </ul>
            </nav>
        </header>
    );
}