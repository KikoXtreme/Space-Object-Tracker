import { Link } from 'react-router-dom';
import styles from './About.module.css'

export const About = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <img src="/assets/space-junk.jpg" alt="Exo Planets Logo" />
            </div>

            <section className={styles["about-content"]}>
                <div className={styles["planet-discovery-logo"]}><Link to="/"><span>Space Object Tracker</span></Link></div>
                <p>'s primary goals, as described in the NASA Science Plan, are to discover planets around other
                    stars, to characterize their properties and to identify planets that could harbor life.
                </p>
                <p>
                    <Link to="/objects">Find your object now.</Link><i className="fa fa-globe" aria-hidden="true"></i>
                </p>
            </section>
        </div>
    );
}