import React, {useEffect} from "react";
import styles from "./CategoryItem.module.scss";
import {useHistory} from "react-router-dom";


const CategoryItem = ({data}) => {
    const {id, title, image_url} = data;
    const history = useHistory();

    const handleClick= () => {
        history.push("/category/"+id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.card} onClick={handleClick}>
                <div className={styles.title}>{title}</div>
                <img className={styles.image} src={image_url} alt={title}/>
            </div>
        </div>
    );
}

export default CategoryItem;
