import React, {useEffect, useState} from "react";
import {getCategories} from "../../../services/categoriesApi";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";


const CategoriesList = () => {
    console.log("Categ")
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( ()=> {
        (async () => {
          const response =  await getCategories();
          console.log(response.data);
          setCategories(response.data)
          // setLoading(false);
        })()
    },[])


    if (loading) {
        return <LoadingIndicator/>;
    }

    return (
        <div></div>
    )
}

export default CategoriesList;
