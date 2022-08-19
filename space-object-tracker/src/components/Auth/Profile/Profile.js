import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import './profile.css';

export const Profile = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <div className="profile"><img src="/assets/profile.png" alt="default user" />
            <h3>User Info:</h3>

            <div className="flex">
                <p>Username: </p>
                <p>{user.username}</p>
            </div>
            <div className="flex">
                <p>Email: </p>
                <p>{user.email}</p>
            </div>
            <div className="flex">
                <p>Country: </p>
                <p>{user.country}</p>
            </div>

            <button className="edit-button">Edit</button>

            {/* <form >
                <div className="flex">
                    <p>Username: </p>
                    <input type="text" name="username" required minlength="5" id="username" value="Kiril" />
                </div>
                <div className="flex">
                    <p>Email: </p>
                    <input type="email"
                        name="email" id="email" required emailValidator value="kiril.valkov@gmail.com" />
                </div>
                <div className="flex">
                    <p>Country: </p>
                    <div>
                        <input ngModel type="text" name="country" id="country" value="Bulgaria" />
                    </div>
                </div>
                <button type="button" className="red-button" > Cancel</button >
                <button className="green-button" > Save</button >
            </form > */}
        </div >
    );
}