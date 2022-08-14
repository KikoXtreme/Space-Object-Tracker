import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../services/objectService";

export const ObjectContext = createContext();

export const ObjectProvider = ({ children }) => {
    const [objects, setObjects] = useState([]);
    const navigate = useNavigate();

    const addObject = (objectData) => {
        setObjects(state => [
            //Error if empty array
            ...state,
            objectData,
        ]);
        console.log(Object.fromEntries(objects) + ' state')
        navigate('/objects');
    }

    const editObject = (objectId, objectData) => {
        setObjects(state => state.map(x => x._id === objectId ? objectData : x));
    }

    const addComment = (objectId, comment) => {
        setObjects(state => {
            const object = state.find(x => x._id === objectId);
            const comments = object.comments || [];
            comments.push(comment);

            return [
                ...state.filter(x => x._id !== objectId),
                { ...object, comments }
            ]
        })
    }

    useEffect(() => {
        getAll()
            .then(result => {
                setObjects(result);
            })
    }, []);

    return (
        <ObjectContext.Provider value={{ objects, addObject, editObject, addComment }}>
            {children}
        </ObjectContext.Provider>
    );
}