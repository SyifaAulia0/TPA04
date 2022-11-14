import { Card } from "../components";
import { portfolios } from "../portfolio";
import styles from "../styles/Portfolio.module.css";

const Portfolio = () => {
  return(
    <div>
      <div className={styles.text}>
        <h1>Portfolio</h1>
        <p>Project yang pernah aku buat </p>
      </div>
    <div className={styles.wrapper}>
    {
      portfolios.map((portfolio, id) => {
        return(
        <Card 
        key={id} 
        title={portfolio.title} 
        desc={portfolio.desc}
        url={portfolio.url} 
        tags={portfolio.tags}
         
        />
      )
    } 
    )}
    </div>
    </div>
  );
};

export default Portfolio;