import styles from './MealForm.module.css';

const MealForm = props => {
    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <form className={styles['meal-form']} onSubmit={submitHandler}>
            <input type="text" />
            <button>Add</button>
        </form>
    )
}

export default MealForm;