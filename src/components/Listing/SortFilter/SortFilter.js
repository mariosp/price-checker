import React, {useState,useEffect} from "react";
import styles from "./SortFilter.module.scss";

const SortFilter = ({onChange, selectedSorting, selectedOrdering, priceFilter , onBlur}) => {
    const [min, setMin] = useState(priceFilter.min);
    const [max, setMax] = useState(priceFilter.max);

    useEffect(()=> {
        setMin(priceFilter.min);
        setMax(priceFilter.max);
    }, [priceFilter])

    const handleSetMin = (event)=> setMin(event.target.value);
    const handleSetMax = (event)=> setMax(event.target.value);



    return(
        <div className={styles.container}>
            <div className={styles.sorting}>
                <select className={styles.sorting} name="sorting" value={`${selectedSorting}-${selectedOrdering}`} onChange={onChange}>
                    <option value=""></option>
                    <option value="price-asc">Cheaper</option>
                    <option value="price-desc">Expensive</option>
                    <option value="title-asc">Product Title (A-Z)</option>
                    <option value="title-desc">Product Title (Z-A)</option>
                </select>
            </div>

            <div className={styles.filtering}>
                <input type="string" value={min} onChange={handleSetMin} onBlur={()=> onBlur(min, max)}/>
                <span>to</span>
                <input type="string" value={max} onChange={handleSetMax} onBlur={()=>onBlur(min, max)}/>
            </div>
        </div>
    )
}

export default SortFilter;
