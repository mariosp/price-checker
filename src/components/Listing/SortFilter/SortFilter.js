import React, {useState} from "react";
import styles from "./SortFilter.module.scss";

const SortFilter = ({onChange, selectedSorting, selectedOrdering}) => {
    // const [selectedSorting, setSelectedSorting] = useState("");
    // const [selectedOrdering, setSelectedOrdering] = useState("asc");
    //
    // const handleOnChangeSorting = (event) => {
    //     const [sort, order] = event.target.value.length? event.target.value.split("-") : ["", "asc"];
    //     setSelectedSorting(sort);
    //     setSelectedOrdering(order);
    // }

    return(
        <div className={styles.container}>
            <div className={styles.sorting}>
                <select className={styles.sorting} name="sorting" value={`${selectedSorting}-${selectedOrdering}`} onChange={onChange}>
                    <option value=""></option>
                    <option value="price-asc">Cheaper</option>
                    <option value="price-desc">Expensive</option>
                    <option value="title-asc">Product Title (A-Z)</option>
                    <option value="title-asc">Product Title (Z-A)</option>
                </select>
            </div>
        </div>
    )
}

export default SortFilter;
