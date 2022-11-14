import styles from "../styles/Layout.module.css";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaHandSparkles } from "react-icons/fa";

const Layout = ({ children }) => {

  return (
    <>
    <div className={styles.background}>
    <div className={styles.wrapper}>
      <nav>
        <ul>
        <li>
          <NavLink to="/"
            style={({ isActive }) => ({ 
              color: isActive ? 'white' : 'black' })}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="portfolio"
            style={({ isActive }) => ({ 
              color: isActive ? 'white' : 'black' })}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="blog"
            style={({ isActive }) => ({ 
              color: isActive ? 'white' : 'black' })}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="about"
            style={({ isActive }) => ({ 
              color: isActive ? 'white' : 'black' })}>
            About
          </NavLink>
        </li>
        </ul>
      </nav>
      {children}
    <footer>
      <h2>Salam Kenal  <FaHandSparkles/></h2>
      <h3>Ingin tau lebih banyak tentang aku,
        Bisa temui aku di akun sosial mediaku yaaa.
        Terima Kasih sudah berkunjung ke websiteku!</h3>
      <span className={styles.akun}>
        <a href="https://www.instagram.com/f_syifaaulia/">
          <FaInstagram size={30} style={{color: 'black', marginRight:"1rem"}}/>
        </a>
        <a href="https://www.linkedin.com/in/syifaauliafitriani/">
          <FaLinkedin size={30} style={{color: 'black', marginRight:"1rem"}}/>
        </a>
        <a href="https://github.com/SyifaAulia0">
          <FaGithub size={30} style={{color: 'black', marginRight:"1rem"}}/>
        </a>
      </span>
      <p>© 2022 Syifa Aulia Fitriani. All Rights Reserved.</p>   
    </footer>
    </div>
    </div>
    
    </>
  );
};

export default Layout;
