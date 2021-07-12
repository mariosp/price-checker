import React, {useEffect, useState} from "react";
import styles from "./ListingPage.module.scss";
import {getCategoryDetails, getCategoryProducts} from "../../services/categoriesApi";
import Title from "../../components/Title/Title";
import SortFilter from "../../components/Listing/SortFilter/SortFilter";
import ProductList from "../../components/Listing/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import {convertCentToCurrencyFormat, convertStringCurrencyToCents} from "../../services/priceService";
import NavigationButton from "../../components/NavigationButton/NavigationButton";


const ListingPage = (props) => {
    // listingPage
    let { id } = props.match.params;
    const [category, setCategory] = useState({});

    // SortFilter
    const [selectedSorting, setSelectedSorting] = useState("");
    const [selectedOrdering, setSelectedOrdering] = useState("asc");

    const [priceFilter, setPriceFilter] = useState({min: 0, max: 0});

    const handleOnChangeSorting = (event) => {
        const [sort, order] = event.target.value.length? event.target.value.split("-") : ["", "asc"];
        setSelectedSorting(sort);
        setSelectedOrdering(order);
    }

    const handleFilterBlur = (min, max) => {
        setPriceFilter({min, max});
    }

    //ProductList
    const [products, setProducts] = useState([]);
    const [ productsNextPage ,setProductsNextPage] = useState([]);
    const [loading, setLoading] = useState(true);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize]= useState(15);
    const [hasNextPage, setHasNextPage] = useState(false);


    useEffect(()=>{
        (async ()=> {
            const response = await getCategoryDetails(id);
            setCategory(response.data);
            const priceRange = {min: convertCentToCurrencyFormat(response.data.price_min).toString() , max: convertCentToCurrencyFormat(response.data.price_max).toString()}
            setPriceFilter(priceRange)
        })()
    }, [id])

    useEffect(()=>{
        setLoading(true);
        const min = convertStringCurrencyToCents(priceFilter.min);
        const max = convertStringCurrencyToCents(priceFilter.max);
        (async () => {
            const response = await getCategoryProducts(id, selectedOrdering, selectedSorting, pageSize, currentPage,min, max);
            setProducts(response.data);
            setLoading(false);
        })()
    }, [selectedSorting,selectedOrdering, currentPage, priceFilter])

    useEffect(()=> {
        const min = convertStringCurrencyToCents(priceFilter.min);
        const max = convertStringCurrencyToCents(priceFilter.max);
        products.length && (async ()=> {
            const response = await getCategoryProducts(id, selectedOrdering, selectedSorting, pageSize, currentPage + 1, min, max);
            setProductsNextPage(response.data);
            setHasNextPage(!!response.data.length);
        })()
    }, [products])

    const handleBack = () => {
        if (props.history.action !== 'POP') return props.history.goBack();
        props.history.push("/");
    }

    return (
        <>
            <NavigationButton handler={handleBack} />
           <div className={styles.container}>
               <Title title={category.title} subtitle={category.products_count} />
               <SortFilter
                   onChange={handleOnChangeSorting}
                   selectedSorting={selectedSorting}
                   selectedOrdering={selectedOrdering}
                   priceFilter={priceFilter}
                   onBlur={handleFilterBlur}
               />
               <ProductList products={products} loading={loading} />
               <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} hasNextPage={hasNextPage}/>
           </div>
        </>
    );
}

export default ListingPage;
