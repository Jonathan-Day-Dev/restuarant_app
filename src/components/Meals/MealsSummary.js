import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Great food delivered right to your front door!</h2>
      <p>
        Choose any of our delicious meals from our broad selection of available
        meals below to enjoy your lunch or dinner at home!
      </p>
      <p>
        We pride ourselves on creating the best meals from the finest, freshest
        ingredients. Everything is house-made and only cooked when you place
        your order.
      </p>
    </section>
  );
};

export default MealsSummary;
