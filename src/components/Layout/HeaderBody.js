import styles from './HeaderBody.module.css';

import HeaderCartButton from './HeaderCartButton';

const HeaderBody = props => {
    return (
        <header className={styles['header-body']}>
            <h1>Jon Day's Cafe and Grill</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>
    )
};

export default HeaderBody;