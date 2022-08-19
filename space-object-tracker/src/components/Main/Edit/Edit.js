import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ObjectContext } from "../../../context/ObjectContext";
import { edit, getOne } from "../../../services/objectService";
import './edit.css';

export const Edit = () => {
    const [currentObject, setCurrentObject] = useState({});
    const { editObject } = useContext(ObjectContext);
    const { objectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOne(objectId)
            .then(objectData => {
                setCurrentObject(objectData)
            })
    }, [objectId]);

    const onSubmit = (e) => {
        e.preventDefault();

        const objectData = Object.fromEntries(new FormData(e.target));

        edit(objectId, objectData)
            .then(result => {
                editObject(objectId, result);
                navigate('/objects');
                // navigate(`/objects/${objectId}`)
            })
    }

    return (
        <div id="edit-page" className="edit-object-border">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                <div className="header-background">
                <span>Edit Object's Information</span>
            </div>
                    {/* <h1>Edit Object's Information</h1> */}

                    <div className="edit-object-title">
                        <label htmlFor="title">Objects's Name: </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required minLength="3"
                            defaultValue={currentObject.title}
                        />
                    </div>
                    <div className="edit-object-title">
                        <label htmlFor="type">Type: </label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            required minLength="3"
                            defaultValue={currentObject.type}
                        />
                    </div>
                    <div className="edit-object-title">
                        <label htmlFor="speed">Orbital Speed: </label>
                        <input
                            type="number"
                            id="speed"
                            name="speed"
                            required minLength="3"
                            defaultValue={currentObject.speed}
                        />
                    </div>
                    <div className="edit-object-content">
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            rows="8"
                            required minLength="10"
                            defaultValue={currentObject.description}
                        />
                    </div>
                    {/* <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentObject.imageUrl} /> */}

                    <input className="btn submit" type="submit" value="Edit Object" />
                </div>
            </form>
        </div>
    );
}