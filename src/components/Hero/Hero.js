import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
    <section className={styles.component}>
        <img src={props.image} alt="" className={styles.image}/>
        <h2 className={styles.title}>{props.titleText}</h2>
    </section>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.string,
}

export default Hero;
