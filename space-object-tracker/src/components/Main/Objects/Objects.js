import { useContext } from "react";
import { ObjectContext } from "../../../context/ObjectContext";
import { ObjectItem } from "./ObjectItem";

export const Objects = () => {
    const { objects } = useContext(ObjectContext);
    return (
        <section id="catalog-page">
            <h1>All Objects</h1>

            {objects.length > 0
                ? objects.map(x => <ObjectItem key={x._id} object={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}