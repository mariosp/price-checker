import React from "react";
import styles from "./LoadingIndicator.module.scss";

const LoadingIndicator = () => {

    return (
        <div className={styles.wrapper}>
            <img src="/images/loading.svg" className={styles.loadingImage} alt="loading"/>
        </div>
    )
}

export default LoadingIndicator;
