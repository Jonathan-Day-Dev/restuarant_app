import styles from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

    const buttonClasses = `${styles.btn} ${btnIsHighlighted ? styles.bump : ''}`;
    const { items } = cartCtx;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span className={styles.text}>Your Cart</span>
            <span className={styles.count}>{items.length}</span>
        </button>
    )
}

export default HeaderCartButton;