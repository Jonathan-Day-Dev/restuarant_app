import styles from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
    return (
        <button className={styles.btn}>
            <span className={styles.icon}><CartIcon /></span>
            <span className={styles.text}>Your Cart</span>
            <span className={styles.count}>3</span>
        </button>
    )
}

export default HeaderCartButton;