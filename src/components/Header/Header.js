import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
    static propTypes = {
        icon: PropTypes.node,
    }
    static defaultProps = {
        icon: settings.logo,
    }
    render(){
        const {icon} = this.props;
        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to="/" className={styles.logo}>
                            <Icon name={icon} />
                        </Link>
                        <nav>
                            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                            <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
                        </nav>
                        <Search/>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;