import { Link } from 'react-router-dom';
import styles from './Home.module.css'

export const Home = () => {
    return (
        <>

            <section id="welcome-world">
                <div className="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in GamesPlay</h3>
                </div>
                <img src="./images/four_slider_img01.png" alt="hero" />
                <div id="home-page">
                    <h1>Latest Games</h1>

                    {/* {games.length > 0
                ? games.map(x => <LatestGame key={x._id} game={x} />)
                : <p className="no-articles">No games yet</p>
            } */}
                </div>
            </section>

            <div className="welcome">
                <h3>Space, the final frontier... Where no man has gone before</h3>
                <p>
                    The successes of discovering exoplanets in recent decades seem to be telling us that the galaxy is abundant with
                    trillions of exoplanets, but finding them isn't easy... <i className="fa fa-globe" aria-hidden="true"></i>
                </p>
                <div className="logged" >
                    <ul>
                        <li><Link to="/users/login">Login</Link></li>
                        <li><Link to="/users/register">Register</Link></li>
                    </ul>
                </div>
            </div >
        </>
    );
}