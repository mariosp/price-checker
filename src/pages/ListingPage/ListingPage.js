import React, {useEffect, useState} from "react";
import styles from "./ListingPage.module.scss";
import {useParams} from "react-router-dom";
import {getCategoryDetails, getCategoryProducts} from "../../services/categoriesApi";
import Title from "../../components/Title/Title";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import SortFilter from "../../components/Listing/SortFilter/SortFilter";
import ProductList from "../../components/Listing/ProductList/ProductList";


const ListingPage = () => {
    // listingPage
    let { id } = useParams();
    const [category, setCategory] = useState({});

    // SortFilter
    const [selectedSorting, setSelectedSorting] = useState("");
    const [selectedOrdering, setSelectedOrdering] = useState("asc");

    const handleOnChangeSorting = (event) => {
        const [sort, order] = event.target.value.length? event.target.value.split("-") : ["", "asc"];
        setSelectedSorting(sort);
        setSelectedOrdering(order);
    }

    //ProductList
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log("API CALL");
        (async ()=> {
            const response = await getCategoryDetails(id);
            setCategory(response.data);
        })()

    }, [id])

    useEffect(()=>{
        setLoading(true);
        (async ()=> {
            const response = await getCategoryProducts(id, selectedOrdering, selectedSorting);
            console.log(response)
            setProducts(response.data);
            setLoading(false);
        })()
    }, [id,selectedSorting,selectedOrdering])

    return (
       <div className={styles.container}>
           <Title title={category.title} subtitle={category.products_count} />
           <SortFilter onChange={handleOnChangeSorting} selectedSorting={selectedSorting} selectedOrdering={selectedOrdering}/>
           <ProductList products={products} loading={loading} />
       </div>
    );
}

export default ListingPage;
