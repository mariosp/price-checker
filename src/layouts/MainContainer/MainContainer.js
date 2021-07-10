import React from "react";
import styles from "./MainContainer.module.scss"

const MainContainer = (props) => {
    return(
        <div className={styles.container}>
            <header>
                {props.children[0] || props.children}
            </header>
            <main>
                {props.children[1]}
            </main>
        </div>
    )
}

export default MainContainer;
