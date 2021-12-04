import styles from './HeaderCartButton.module.css';
import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    return (
        <button className={styles.btn} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span className={styles.text}>Your Cart</span>
            <span className={styles.count}>{cartCtx.items.length}</span>
        </button>
    )
}

export default HeaderCartButton;