import React, {useState} from "react";
import CardsContainer from "./cards/CardsContainer";
import styles from './GamePage.module.css'
import Button from "../common/Button";
import {cardType} from "../../types/cardsReducerTypes";

type PropType = {
    cards: Array<cardType>
    onStartClick: () => void
    counter: number
}
const GamePage = (props: PropType) => {

    const [start, setStart] = useState(false)

    const onButtonClick = () => {
        props.onStartClick()
        setStart(true)
    }


    if (!start) {
        return <div className={styles.gamePage}><Button onClick={onButtonClick} text={'START'}/></div>
    }
    return (
        <>
            <div className={styles.gamePage}><CardsContainer/>
                {props.cards.every(card => card.isSelected)
                    ? ''
                    : <div className={styles.counter}>
                        <span>Round № {props.counter}</span>
                    </div>
                }
            </div>
        </>
    )
}
export default GamePage
