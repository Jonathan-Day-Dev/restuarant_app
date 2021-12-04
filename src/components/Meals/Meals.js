import styles from './Meals.module.css';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = props => {
    return (
        <div className={styles.meals}>
            <MealsSummary />
            <AvailableMeals />
        </div>
    )
}

export default Meals;