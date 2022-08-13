import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ObjectContext } from "../../../context/ObjectContext";
import { edit, getOne } from "../../../services/objectService";

export const Edit = () => {
    const [editedObject, setEditedObject] = useState({});
    const { editObject } = useContext(ObjectContext);
    const { objectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOne(objectId)
            .then(objectData => {
                setEditedObject(objectData)
            })
    }, [objectId]);

    const onSubmit = (e) => {
        e.preventDefault();

        const objectData = Object.fromEntries(new FormData(e.target));

        edit(objectId, objectData)
            .then(result => {
                editObject(objectId, result);
                navigate('/objects');
                // navigate(`/catalog/${gameId}`)
            })
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={editedObject.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={editedObject.category} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        defaultValue={editedObject.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={editedObject.imageUrl} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={editedObject.summary} />
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    );
}