import { Container } from "../components";
import { blogs } from "../blog";
import styles from "../styles/Blog.module.css";
import { AiFillEdit } from "react-icons/ai";

const Blog = () => {
    return (
      <>
      
      <div>
        <div className={styles.blog}>
          <h1><AiFillEdit/> Blog </h1>
          <p>Aku menulis materi-materi yang sudah kupelajari di skilvul
          </p>
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
    )
  };
  
  export default Blog;