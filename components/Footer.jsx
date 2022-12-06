import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            VENHA SENTIR NOSSO SABOR.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ENCONTRE NOSSOS RESTAURANTES</h1>
          <p className={styles.text}>
            1654 R. Jaco Madalozzo. 
            <br /> Santa Helena, 850
            <br /> (45) 4002 8922
          </p>
          <p className={styles.text}>
            2356 R. Manaus.
            <br /> Santa Helena, 1344
            <br /> (45) 4002 8922
          </p>
          <p className={styles.text}>
            1614 R. Gaivota.
            <br /> SubSede, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 R. ipê.
            <br /> Toledo, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Aberto </h1>
          <p className={styles.text}>
            Segunda-feira à Sexta-feira
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            Sábado - Domingo
            <br /> 19:00 – 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
