import { Link } from "react-router-dom";

export const ObjectItem = ({ object }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                OBJECT ITEM!!!!
                <img src={object.imageUrl} />
                <h6>{object.category}</h6>
                <h2>{object.title}</h2>
                <Link to={`/catalog/${object._id}`} className="details-button">Details</Link>
                <Link style={{ marginLeft: '150px' }} to={`/objects/${object._id}/edit`} className="details-button">Edit</Link>
            </div>
        </div>
    );
}