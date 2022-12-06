import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A MELHOR PIZZARIA DA REGIÃO</h1>
      <p className={styles.desc}>
      Deliciosa e quente, Essa Pizza é pra você e o melhor, mais rápido do que você imagina !
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

console.log(PizzaList);
export default PizzaList;


