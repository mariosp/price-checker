import React from "react";
import styles from "./LoadingIndicator.module.scss";

const LoadingIndicator = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.loadingImage}></div>
        </div>
    )
}

export default LoadingIndicator;
