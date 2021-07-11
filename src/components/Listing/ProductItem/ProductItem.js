import React from "react";
import styles from "./ProductItem.module.scss"
import {convertCentToEuro} from "../../../services/priceService";


const ProductItem = ({product}) => {
    const {image_url, title, excerpt, price} = product;

   const [manufacturerHtml, ...details] = excerpt && excerpt.length? excerpt.split(",") : ["", ""];
   const manufacturer = manufacturerHtml.replace(/<\/?[^>]+(>|$)/g, "");

   const detailsJoined = details.join(", ");


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img src={image_url} alt={"test"} />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.titleContainer}>
                            <div className={styles.title}>{title}</div>
                            <div className={styles.subtitle}>{manufacturer}</div>
                        </div>
                        <div className={styles.excerpt}>{detailsJoined}</div>
                        <div className={styles.price}>{convertCentToEuro(price)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
