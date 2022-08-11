import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
            More than 27,000 objects and pieces of orbital debris are tracked by the DoD's global Space Surveillance Network (SSN) sensors.
            </p>
            <p>
                Helping NASA and DoD discover new objects is essential for protecting humans on Earth. It will ensure much better and safer space exploration.
            </p>
            <p>More real-time data:
                <span> <a href="https://www.nasa.gov/mission_pages/station/news/orbital_debris.html" target="_blank" rel="noreferrer">NASA Watch</a> </span>
                &copy; 2022
            </p>
        </footer>
    );
}