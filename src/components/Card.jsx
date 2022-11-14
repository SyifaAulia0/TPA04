import styles from "../styles/Card.module.css"

const Card = ({ title, desc, tags, url }) => {
  return (
    <>
    <div className={styles.wrapper}>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <a href={url}>{url}</a>
      </div>
      <div>
      {
        tags ? tags.map((tag, idx) => (
          <span className={styles.tag} key={idx}>{tag}</span>
        )) : (
          <div></div>
        )
      }
      </div>
    </div>
    </>
  )    
}

export default Card;