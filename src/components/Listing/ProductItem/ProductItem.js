import React from "react";
import styles from "./ProductItem.module.scss"
import {convertCentToEuro} from "../../../services/priceService";
import {useHistory} from "react-router-dom";


const ProductItem = ({product}) => {
    const history = useHistory();
    const {image_url, title, excerpt, price, id} = product;

   const [manufacturerHtml, ...details] = excerpt && excerpt.length? excerpt.split(",") : ["", ""];
   const manufacturer = manufacturerHtml.replace(/<\/?[^>]+(>|$)/g, "");

   const detailsJoined = details.join(", ");

   const handleClick = () => history.push({
       pathname: "/product/" + id,
       state: product
   })

    return (
        <div className={styles.container}>
            <div className={styles.card} onClick={handleClick}>
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
