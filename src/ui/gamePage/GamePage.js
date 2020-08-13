import React, {useState} from "react";
import CardsContainer from "./cards/CardsContainer";
import styles from './GamePage.module.css'

const GamePage = (props) => {

    const [start, setStart] = useState(false)

    const onButtonClick = () => {
        props.onStartClick()
        setStart(true)
    }


    if(!start){
     return <button onClick={onButtonClick}>start</button>
    }
    return (
        <div className={styles.gamePage}><CardsContainer onStartClick={props.onStartClick}/></div>

    )
}
export default GamePage
