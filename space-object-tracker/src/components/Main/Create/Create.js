import { useContext } from "react";
import { Link } from "react-router-dom";
import { ObjectContext } from "../../../context/ObjectContext";
import { create } from "../../../services/objectService";
import './create.css'

export const Create = () => {
    const { addObject } = useContext(ObjectContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const objectData = Object.fromEntries(new FormData(e.target));
        create(objectData)
            .then(result => {
                addObject(result)
            });
        console.log(objectData)
    }

    return (
        <div className="new-object-border">
            <div className="header-background">
                <span>Object Discovery</span>
            </div>
            <form onSubmit={onSubmit}>
                <div className="new-object-title">
                    <label htmlFor="title">Objects's Name: </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Alpha 1 neo..."
                        required minLength="3"
                    />
                </div>
                <div className="new-object-title">
                    <label htmlFor="type">Type: </label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Satelite, Debris..."
                        required minLength="3"
                    />
                </div>
                <div className="new-object-title">
                    <label htmlFor="speed">Orbital Speed: </label>
                    <input
                        type="number"
                        id="speed"
                        name="speed"
                        placeholder="km/h..."
                        min={100}
                        required minLength="3"
                    />
                </div>
                <div className="new-object-content">
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        rows="8"
                        placeholder="Object's description and specifications..."
                        required minLength="10"></textarea>
                </div>
                <div className="new-object-buttons">
                    <Link to="/">Cancel</Link>
                    <button className="public" type="submit">Submit</button>
                    {/* <input className="btn submit" type="submit" value="Create Object" /> */}
                </div>
            </form>
        </div>
    );
}