import styles from './MealForm.module.css';
import { useState } from 'react';

import MealInput from './MealInput';

const MealForm = props => {
    const [quantity, setQuantity] = useState(0);

    const quantityHandler = e => {
        setQuantity(e.target.value);
    }

    const addQuantity = () => {
        setQuantity(+quantity + 1)
    }

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <form className={styles['meal-form']} onSubmit={submitHandler}>
            <MealInput 
                step="1"
                value={quantity}
                onChange={quantityHandler}
            />
            <button onClick={addQuantity}>Add{quantity > 0 ? ` ${quantity}` : ''}</button>
        </form>
    )
}

export default MealForm;