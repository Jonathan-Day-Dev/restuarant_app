import styles from './MealForm.module.css';

const MealForm = props => {
    const quantity = props.quantity;
    
    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <form className={styles['meal-form']} onSubmit={submitHandler}>
            <button onClick={props.onAddToCart}>{props.quantity > 0 ? `${quantity} Added` : 'Add'}</button>
        </form>
    )
}

export default MealForm;