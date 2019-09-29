import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

const Info = props => (
    <Container>
        <Hero titleText={props.title} image={props.image} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </Container>
);

Info.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.node,
    image: PropTypes.string,
};

Info.defaultProps = {
    title: settings.info.title,
    desc: settings.info.desc,
    image: settings.info.image,
};

export default Info;