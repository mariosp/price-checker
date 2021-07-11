import React, {useState, useEffect} from "react";
import styles from "./DetailsPage.module.scss";
import {getProduct} from "../../services/productApi";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import {convertCentToEuro} from "../../services/priceService";

const DetailsPage = (props) => {
    const { id } = props.match.params;
    const productState = props.location.state;
    const [product, setProduct] = useState(productState);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        if(!product) {
            setLoading(true);
            (async ()=>{
                const response = await getProduct(id);
                setProduct(response);
                setLoading(false);
            })()
        }
    },[id, product])

    if(loading) {
        return <LoadingIndicator />
    }

    const {title, image_url, excerpt, price, description} = product;

    const [manufacturerHtml, ...details] = excerpt && excerpt.length? excerpt.split(",") : ["", ""];
    const manufacturer = manufacturerHtml.replace(/<\/?[^>]+(>|$)/g, "");

    const renderListOfDetails = () => {
        return details.map(item=> <li key={item} className={styles.listitem}>{item}</li>)
    }

    return(
        <div className={styles.container}>
            <div className={styles.imagewrapper}>
                <img src={image_url} alt={title}/>
            </div>
            <div className={styles.details}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{manufacturer}</div>
                </div>
                <div className={styles.excerpt}>
                        {renderListOfDetails()}
                </div>
                <div className={styles.price}>{convertCentToEuro(price)}</div>
                <div className={styles.description}  dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
        </div>
    )
}

export default DetailsPage;
