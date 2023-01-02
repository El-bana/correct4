import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user.user);

  return (
    <nav>
      <Link className={styles.logo} to={"/"}>
        Correct <span>4</span>
      </Link>
      {!user && (
        <>
          <div className={styles.links}>
            <Link to="/" className={styles.active}>
              <p>Home</p>
            </Link>
            <a href="#">
              <p>About Us</p>
            </a>
            <a href="#">
              <p>Classes</p>
            </a>
          </div>
          <Link to="/login" className={styles.sign_up} href="#">
            <p>Sign In</p>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
