import styles from "./MealForm.module.css";

const MealForm = (props) => {
  console.log(props)
  return (
      <button onClick={props.onAddToCart} className={styles['meal-form']}>
        {props.amount > 0 ? `${props.amount} Added` : "Add"}
      </button>
  );
};

export default MealForm;
