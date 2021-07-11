import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({setCurrentPage, currentPage, hasNextPage}) => {

    return(
        <div className={styles.container}>
            <button onClick={()=>setCurrentPage((currentPage)=> currentPage - 1)} disabled={currentPage === 1}>
                <img src="/images/back.svg" alt="back" />
            </button>
            <button onClick={()=> setCurrentPage((currentPage)=> currentPage + 1)} disabled={!hasNextPage}>
                <img src="/images/next.svg" alt="next" />
            </button>
        </div>
    )
}

export default Pagination;
