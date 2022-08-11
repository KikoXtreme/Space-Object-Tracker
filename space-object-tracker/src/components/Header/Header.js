import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    Space Object Tracker
                </Link>
            </h1>
            <nav>
                {/* {user.email && <span>{user.email}</span>} */}
                <Link to="/catalog">All Objects</Link>
                {true//user.email 
                    ? <div id="user">
                        <Link to="/create">Add Object</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    );
}