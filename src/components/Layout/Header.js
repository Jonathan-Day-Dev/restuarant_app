import styles from './Header.module.css';

import cafeImage from '../../assets/cafe.jpg';

import { Fragment } from 'react';
import HeaderBody from './HeaderBody';

const Header = props => {
    return (
        <Fragment>
            <HeaderBody />
            <div className={styles.image}>
                <img src={cafeImage} alt="Cafe dinning room" />
            </div>
        </Fragment>
    )
}

export default Header;