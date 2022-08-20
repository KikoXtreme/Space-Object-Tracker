import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import './objects.css'

export const ObjectItem = ({ object }) => {
    const { user } = useContext(UserContext);

    return (
        <div className="objectItem">
            <div className="sections">
                {/* <img src={object.imageUrl} alt="Space Object" /> */}
                <h2><i className="fa-solid fa-globe"></i> {object.title}</h2>
                <h3><i className="fa-solid fa-satellite"></i> {object.type}</h3>
                <h3><i className="fa-solid fa-gauge-high"></i> {object.speed} km/h</h3>
                <h3><i className="fa-solid fa-align-right"></i> {object.description}</h3>
                <div className="empty"></div>
            </div>
            <div className="sections">
                {user.accessToken
                    ? <>
                        <Link to={`/objects/${object._id}`} className="details-button">Details</Link>
                        <Link to={`/objects/${object._id}/edit`} className="details-button">Edit</Link>
                    </>
                    : null
                }
            </div>
        </div >
    );
}