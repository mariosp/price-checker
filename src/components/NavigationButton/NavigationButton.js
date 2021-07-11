import React from "react";
import styles from "./NavigationButton.module.scss";

const NavigationButton = ({handler}) => {
    return (
        <button className={styles.wrapper} onClick={handler}>
            <img src="/images/back.svg" alt="back" />
        </button>
    )
}

export default NavigationButton;
