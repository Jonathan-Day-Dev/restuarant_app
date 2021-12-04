import styles from "./MealInput.module.css";

const MealInput = (props) => {
  return (
    <div>
      <input
        {...props.input}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default MealInput;
