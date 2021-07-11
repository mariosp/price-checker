import React, {useEffect, useState} from "react";
import styles from "./CategoriesList.module.scss";
import {getCategories} from "../../../services/categoriesApi";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";
import CategoryItem from "../CategoryItem/CategoryItem";


const CategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( ()=> {
        (async () => {
          const response =  await getCategories();
          const sortedData = response.data.sort((a, b) => {
              if(a.position < b.position) return -1;
              if(a.position > b.position) return 1;
              return 0;
          })
            console.log(sortedData);
          setCategories(sortedData)
          setLoading(false);
        })()

        return ()=> console.log("unmount")
    },[])

    const renderCategories = () => {
      return categories.map(category => (
            <CategoryItem key={category.id} data={category} />
      ))
    }

    return (
        <div className={styles.container}>
            {loading && <LoadingIndicator />}
            {categories && renderCategories()}
        </div>
    )
}

export default CategoriesList;
