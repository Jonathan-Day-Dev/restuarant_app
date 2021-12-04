import styles from './MealForm.module.css';
import { useState, useRef } from 'react';

import MealInput from './MealInput';

const MealForm = props => {
    const inputRef = useRef();
    const [quantity, setQuantity] = useState(0);
    const [amtIsValid, setAmtIsValid] = useState(true);

    const quantityHandler = e => {
        setQuantity(e.target.value);
    }

    const addQuantity = () => {
        setQuantity(+quantity + 1)
    }

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNum < 0) {
            setAmtIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
    }

    return (
        <form className={styles['meal-form']} onSubmit={submitHandler}>
            <MealInput 
                ref={inputRef}
                input={{
                    id: `amount_${props.id}`,
                    type: "number",
                    min: "0",
                    step: "1",
                }}
                value={quantity}
                onChange={quantityHandler}
            />
            <button onClick={addQuantity}>{quantity > 0 ? `${quantity} Added` : 'Add'}</button>
            {!amtIsValid && <p>Please enter a valid number of items</p>}
        </form>
    )
}

export default MealForm;