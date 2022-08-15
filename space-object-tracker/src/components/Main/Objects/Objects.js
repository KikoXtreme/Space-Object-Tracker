import { useContext } from "react";
import { ObjectContext } from "../../../context/ObjectContext";
import { ObjectItem } from "./ObjectItem";
import './objects.css'

export const Objects = () => {
    const { objects } = useContext(ObjectContext);
    return (
        <section id="objects-page">
            <h1>All Found Objects</h1>
            {objects.length > 0
                ? objects.map(x => <ObjectItem key={x._id} object={x} />)
                : <h2 className="no-objects">No objects found yet</h2>
            }
        </section>
    );
}