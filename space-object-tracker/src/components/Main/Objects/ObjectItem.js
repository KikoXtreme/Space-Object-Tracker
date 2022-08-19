import { Link } from "react-router-dom";
import './objects.css'

export const ObjectItem = ({ object }) => {
    return (
        <div className="objectItem">
            <div className="sections">
                {/* <img src={object.imageUrl} alt="Space Object" /> */}
                {/* <label htmlFor="title">Object:</label>??????????? */}
                <h2>{object.title}</h2>
                <h3>{object.type}</h3>
                <h3>{object.speed}</h3>
                <h3>{object.description}</h3>
            </div>
            <div className="sections">
                <Link to={`/objects/${object._id}`} className="details-button">Details</Link>
                <Link to={`/objects/${object._id}/edit`} className="details-button">Edit</Link>
            </div>
        </div >
    );
}