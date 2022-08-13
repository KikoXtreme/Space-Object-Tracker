import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOne } from "../../../services/objectService";

export const Details = () => {
    const [currentObject, setCurrentObject] = useState({});
    const { objectId } = useParams();

    useEffect(() => {
        getOne(objectId)
            .then(objectData => {
                setCurrentObject(objectData);
            })
    }, [objectId]);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentObject.imageUrl} alt="Space Object"/>
                    <h1>{currentObject.title}</h1>
                    <span className="levels">MaxLevel: {currentObject.maxLevel}</span>
                    <p className="type">{currentObject.category}</p>
                </div>
                <p className="text">
                    {currentObject.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* {game.comments?.map(x => 
                        <li className="comment">
                            <p>{x}</p>
                        </li>
                    )} */}
                    </ul>

                    {/* {!game.comments &&
                    <p className="no-comment">No comments.</p>
                } */}
                </div>

                <div className="buttons">
                    <Link to={`/objects/${objectId}/edit`} className="button">
                        Edit
                    </Link>
                    <Link to="#" className="button">
                        Delete
                    </Link>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" /*onSubmit={addCommentHandler}*/>
                    <input
                        type="text"
                        name="username"
                        placeholder="John Doe"
                        // onChange={onChange}
                        // onBlur={validateUsername}
                        // value={comment.username}
                    />

                    {/* {error.username &&
                        <div style={{ color: 'red' }}>{error.username}</div>
                    } */}

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        // onChange={onChange}
                        // value={comment.comment}
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}