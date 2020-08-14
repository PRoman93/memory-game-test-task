import React from "react";
import styles from './Button.module.css'

const Button = (props) => {

    const onButtonClick = () => {
        props.onClick()
    }
    return (
        <button onClick={onButtonClick} className={styles.button}>{props.text}</button>
    )
}
export default Button
