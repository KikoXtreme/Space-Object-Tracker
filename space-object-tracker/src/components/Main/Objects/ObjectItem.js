import { Link } from "react-router-dom";
import './objects.css'

export const ObjectItem = ({ object }) => {
    return (
        <div className="objectItem">
            <div className="sections">
                <img src={object.imageUrl} alt="Space Object" />
                <h2>{object.title}</h2>
                <h6>{object.category}</h6>
            </div>
            <div className="sections">
                <Link to={`/objects/${object._id}`} className="details-button">Details</Link>
                <Link to={`/objects/${object._id}/edit`} className="details-button">Edit</Link>
            </div>
        </div>
    );
}