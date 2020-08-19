import React from "react";
import styles from './Button.module.css'

type PropType = {
    text:string
    onClick:()=>void
}
const Button: React.FC<PropType> = (props) => {

    const onButtonClick = () => {
        props.onClick()
    }
    return (
        <button onClick={onButtonClick} className={styles.button}>{props.text}</button>
    )
}
export default Button
