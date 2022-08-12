import { useContext } from "react";
import { ObjectContext } from "../../../context/ObjectContext";
import { create } from "../../../services/objectService";

export const Create = () => {
    const { addObject } = useContext(ObjectContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const objectData = Object.fromEntries(new FormData(e.target));
        console.log(objectData)

        create(objectData)
            .then(result => {
                addObject(result)
            });
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />

                    <label htmlFor="game-img">Image:</label>

                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />

                    <label htmlFor="summary">Summary:</label>

                    <textarea name="summary" id="summary" defaultValue={""} />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}