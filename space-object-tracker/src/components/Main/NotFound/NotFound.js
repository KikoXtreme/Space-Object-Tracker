import { Link } from "react-router-dom";
import styles from './NotFound.module.css';

export const NotFound = () => {
    return (
        <figure>
            <div className={styles["sad-mac"]}></div>
            <figcaption>
                <span className={styles.e}></span>
                <span className={styles.r}></span>
                <span className={styles.r}></span>
                <span className={styles.o}></span>
                <span className={styles.r}></span>
                <span className={styles._4}></span>
                <span className={styles._0}></span>
                <span className={styles._4}></span>
                <span className={styles.n}></span>
                <span className={styles.o}></span>
                <span className={styles.t}></span>
                <span className={styles.f}></span>
                <span className={styles.o}></span>
                <span className={styles.u}></span>
                <span className={styles.n}></span>
                <span className={styles.d}></span>
            </figcaption>
            <div className={styles.msg}>Ooops! Page Not Found<p>Let's go <Link to="/">home</Link> and try from there.</p>
            </div>
        </figure>
    );
}