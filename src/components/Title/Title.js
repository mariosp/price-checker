import React from "react";
import styles from "./Title.module.scss";

const Title = ({title, subtitle}) => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            {subtitle && <div className={styles.subtitle}>{subtitle} products</div>}
        </div>
    );
}

export default Title;
