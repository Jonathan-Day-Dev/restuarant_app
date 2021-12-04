import styles from "./CartItem.module.css";
// id, name, description, price, amount
const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    console.log(price)
  return (
    <li>
      <div className={styles['cart-item']}>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.main}>
          <span>{price}</span>
          <span>{`Amt: ${props.amount}`}</span>
        </div>
      </div>
      <div>
          <button onRemove={props.onRemove}>-</button>
          <button onAdd={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
