import React from "react";
import styles from "./CategoryItem.module.scss";

const CategoryItem = ({title, image}) => {
    console.log(title)
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.title}>{title}</div>
                <img className={styles.image} src={image} />
            </div>
        </div>
    );
}

export default CategoryItem;
