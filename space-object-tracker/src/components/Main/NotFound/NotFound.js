import { Link } from "react-router-dom";
import './notFound.css';


export const NotFound = () => {
    return (
        <div className="notFound">
            <h1> - 404 - </h1>
            <h2><i className="fa fa-globe" aria-hidden="true"></i> PAGE NOT FOUND <i className="fa fa-globe" aria-hidden="true"></i></h2>
            <p><Link to="/">Go To Home Page</Link></p>
        </div>
    );
}