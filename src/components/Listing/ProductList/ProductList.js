import React from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";

const ProductList = ({products, loading}) => {

    const renderProducts = () => {
        return products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))
    }

    return(
        <div className={styles.container}>
            {loading && <LoadingIndicator />}
            {renderProducts()}
        </div>
    )
}

export default ProductList;
