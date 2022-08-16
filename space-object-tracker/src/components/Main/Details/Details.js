import { useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ObjectContext } from "../../../context/ObjectContext";
import { UserContext } from "../../../context/UserContext";
import { createComment, getCommentByObjectId } from "../../../services/commentService";
import { deleteOne, getOne } from "../../../services/objectService";

export const Details = () => {
    const { addComment, deleteObject, selectObject, detailsObject } = useContext(ObjectContext);
    const { user } = useContext(UserContext);
    const { objectId } = useParams();
    const navigate = useNavigate();

    const currentObject = selectObject(objectId)
    const isOwner = currentObject._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const details = await getOne(objectId);
            const comments = await getCommentByObjectId(objectId);
            
            detailsObject(objectId, { ...details, comments: comments.map(x => `${x.user.email}: ${x.text}`) })
        })();
    }, []);

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const comment = formData.get('comment');
        createComment(objectId, comment)
            .then(result => {
                addComment(objectId, comment)
            })
    }

    const deleteObjectHandler = () => {
        if (window.confirm('Are you sure you want to proceed?')) {
            deleteOne(objectId)
                .then(() => {
                    deleteObject(objectId);
                    navigate('/objects');
                })
        }
    }

    // const validateUsername = (e) => {
    //     const username = e.target.value;
    //     let errorMsg = '';

    //     if (username.length < 3) {
    //         errorMsg = 'Username must be at least 3 characters long';
    //     } else if (username.length > 10) {
    //         errorMsg = 'Username must be at max 10 characters long';
    //     }

    //     // setError(state => ({
    //     //     ...state,
    //     //     username: errorMsg
    //     // }))
    // }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentObject.imageUrl} alt="Space Object" />
                    <h1>{currentObject.title}</h1>
                    <span className="levels">MaxLevel: {currentObject.maxLevel}</span>
                    <p className="type">{currentObject.category}</p>
                </div>
                <p className="text">{currentObject.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {currentObject.comments?.map(x => <li key={x.text} className="comment"><p>{x}</p></li>)}
                    </ul>
                    {!currentObject.comments && <p className="no-comment">No comments.</p>}
                </div>
                {isOwner &&
                    <div className="buttons">
                        <Link to={`/objects/${objectId}/edit`} className="button">Edit</Link>
                        <button onClick={deleteObjectHandler} className="button"> Delete</button>
                    </div>
                }
            </div>
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Add Comment Here..." />
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}