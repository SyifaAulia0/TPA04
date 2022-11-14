import { format, parseISO } from "date-fns";
import styles from "../styles/Container.module.css";

const Container = ({ title, subTitle, createdAt, url }) => {
  console.log(url)
  return (
    <>
    <div className={styles.wrapper}> 
      <div>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <a href={url}>{url}</a>
      </div>
      <div>
        <h3>{format(parseISO(createdAt), "MMMM yyyy")}</h3>
      </div>
    </div>
    </>
  );
};

export default Container;