import styles from './About.module.css';

function About(props) {

    return (
        <section className={styles.container}>
            <span className={styles.aboutTitle}>{props.title}</span>
            <p className={styles.aboutBody}>{props.body}</p>
        </section>
    )
}
export default About;