import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

const FAQ = props => (
    <Container>
        <Hero titleText={props.title} image={props.image} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </Container>
);

FAQ.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.node,
    image: PropTypes.string,
};

FAQ.defaultProps = {
    title: settings.faq.title,
    desc: settings.faq.desc,
    image: settings.faq.image,
};

export default FAQ;