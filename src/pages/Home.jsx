import { Container } from "../components";
import { blogs } from "../blog";
import styles from "../styles/Home.module.css";
import logoSipa from "../logosipa.png";
import { AiFillEdit } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className={styles.intro}>
        <h2>Haloooo aku Syifa Aulia Fitriani. Aku mahasiswi Teknik Informatika 
          di Universitas Muhammadiyah Jakarta.
        </h2>
        <img  src={logoSipa} alt="" width="300"/>
      </div>

      <div>
        <div>
          <h1>
            <AiFillEdit/> Blog</h1>
        </div>        
        {blogs.map((blog, idx) => {
          console.log(blog)
          return(
            <Container
            key={idx}
            title={blog.title}
            subTitle={blog.subTitle}
            createdAt={blog.createdAt}
            url={blog.link}
          />
          )
        }      
        )}
      </div>

    </>
  );
};

export default Home;