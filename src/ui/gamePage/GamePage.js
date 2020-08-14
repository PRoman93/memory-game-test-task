import React, {useState} from "react";
import CardsContainer from "./cards/CardsContainer";
import styles from './GamePage.module.css'
import Button from "../common/Button";

const GamePage = (props) => {

    const [start, setStart] = useState(false)

    const onButtonClick = () => {
        props.onStartClick()
        setStart(true)
        // let message = window.confirm('Do you prefer your game depends on time or not?')
        // let setTime = prompt('How much?', '')
        //  return message ? setTime : ''
        // if(message){
        //     setTimeout(()=>{
        //
        //     }, message)
        // }
    }


    if (!start) {
        return <div className={styles.gamePage}><Button onClick={onButtonClick} text={'START'}/></div>
    }
    return (
        <>
            <div className={styles.gamePage}><CardsContainer onStartClick={onButtonClick}/>
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
