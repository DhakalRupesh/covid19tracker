import React from "react";
import Virus from "../../assets/v1.png";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.bannercontainer}>
      <img className={styles.image} src={Virus} alt="virusimage" />
      <h1 className={styles.bannerheading}>COVID19</h1>
    </div>
  );
}
