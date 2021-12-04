import styles from "./MealInput.module.css";

const MealInput = (props) => {
  return <input 
    className={styles.input} 
    type="number" 
    step={props.step} 
    value={props.value} 
    onChange={props.onChange}
/>;
};

export default MealInput;
