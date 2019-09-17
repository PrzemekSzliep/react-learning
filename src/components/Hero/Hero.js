import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <section className={styles.component}>
        <img src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="" className={styles.image}/>
        <h2 className={styles.title}>Things to do</h2>
    </section>
);

export default Hero;
