import styles from "./AvailableMeals.module.css";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "Sweet Heat Burger",
    description:
      "A 1/2 lb beef patty on a jalepeno sourdough bun. Comes with grilled jalepenos and onions, lettuce, tomato, bacon and mayo",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Roast Beef Platter",
    description:
      "Comes with our house-cooked roast beef, two sides of your choice, a roll, dessert and a drink",
    price: 14.59,
  },
  {
    id: "m3",
    name: "Lemon Chicken Salad",
    description:
      "Our Lemon Chicken marinates for no less than three days before we slice it up and place it on a bed of lettuce with tomatoes, olives, onions and your choice of dressing",
    price: 9.99,
  },
  {
    id: "m4",
    name: "Cranberry Club",
    description:
      "Ham, turkey, lettuce, tomatoes and our house-made cranberry sauce on three slices of sourdough bread",
    price: 9.59,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_DATA.map((meal) => <li key={meal.id}>{meal.name}</li>);
  return <ul className={styles.meals}>{mealsList}</ul>;
};

export default AvailableMeals;
