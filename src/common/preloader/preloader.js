import preloader from "../../assets/images/preloader.svg";
import React from "react";
import styles from './preloader.module.css'

let Preloader =(props) => {
return <div> <img className={styles.preloaderImg} src={preloader}  /> </div>
}
export default Preloader