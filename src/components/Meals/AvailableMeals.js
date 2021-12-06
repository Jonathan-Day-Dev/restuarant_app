import styles from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import Meal from "./MealItems/Meal";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "Sweet Heat Burger",
    description:
      "A 1/2 lb beef patty on a jalepeno sourdough bun. Comes with grilled jalepenos and onions, lettuce, tomato, bacon and mayo",
    price: 12.99,
    amount: 0
  },
  {
    id: "m2",
    name: "Roast Beef Platter",
    description:
      "Comes with our house-cooked roast beef, two sides of your choice, a roll, dessert and a drink",
    price: 14.59,
    amount: 0
  },
  {
    id: "m3",
    name: "Lemon Chicken Salad",
    description:
      "Our Lemon Chicken marinates for no less than three days before we slice it up and place it on a bed of lettuce with tomatoes, olives, onions and your choice of dressing",
    price: 9.99,
    amount: 0
  },
  {
    id: "m4",
    name: "Cranberry Club",
    description:
      "Ham, turkey, lettuce, tomatoes and our house-made cranberry sauce on three slices of sourdough bread",
    price: 9.59,
    amount: 0
  },
  {
    id: "m5",
    name: "Tortilla Soup",
    description: "Soup made with chicken and veggies, topped with fried tortilla strips",
    price: 8.99,
    amount: 0
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_DATA.map((meal) => (
    <Meal 
      className={styles["meals__list-item"]} 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      amount={meal.amount}
    >
      {meal.name}
    </Meal>
  ));
  return <Card className={styles.meals}>{mealsList}</Card>;
};

export default AvailableMeals;
