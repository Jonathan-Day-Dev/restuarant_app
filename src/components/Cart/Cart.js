import styles from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        { id: "c1", name: "Sushi", amount: 2, price: 14.99 },
        { id: "c2", name: "Kid's Burger", amount: 1, price: 5.49 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$20.48</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["btn--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles.btn}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
