import { forwardRef } from "react";
import styles from "./MealInput.module.css";

const MealInput = forwardRef((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        {...props.input}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
});

export default MealInput;
