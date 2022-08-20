import { useContext } from "react";
import { Link } from "react-router-dom";
import { ObjectContext } from "../../../context/ObjectContext";
import { UserContext } from "../../../context/UserContext";
import { ObjectItem } from "./ObjectItem";
import './objects.css'

export const Objects = () => {
    const { objects } = useContext(ObjectContext);
    const { user } = useContext(UserContext);

    return (
        <section id="objects-page">
            <div className="logged" >
                {!user.accessToken
                    ?
                    <>
                        <p className="trackers">Welcome Space Trackers, please Register or Login!</p>
                        <div className="sections">
                            <Link to="/users/register">Register</Link>
                            <Link to="/users/login">Login</Link>
                        </div>
                    </>
                    : null
                }
            </div>
            <h1>All Objects</h1>
            {objects.length > 0
                ? objects.map(x => <ObjectItem key={x._id} object={x} />)
                : <h2 className="no-objects">No objects found yet!</h2>
            }
        </section>
    );
}