import React, {useState} from "react";
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../common/Button";
import styles from './Cards.module.css'
import {shufflingCardsPosition, victoryCase} from "../../../dal/cardsReducer";
import winSound from '../../../assets/sounds/Sound_20947.mp3'
import {AppStateType} from "../../../dal/store";

const CardsContainer = () => {

    const dispatch = useDispatch()
    const [start, setStart] = useState(false)

    const onButtonClick = () => {
        dispatch(shufflingCardsPosition())
        dispatch(victoryCase())
        setStart(true)
    }
    const {cards, loading} = useSelector((state: AppStateType) => state.reducer)


    if (cards.every(card => card.isSelected) && !start) {
        return <div className={styles.contentWrapper}>
            {/*sound of applause after last pair of cards open*/}
            <audio src={winSound} autoPlay={true}/>
            <h2 className={styles.header}>You won!</h2><Button onClick={onButtonClick} text={'play again'}/>
        </div>
    } else {
        return (
            <Cards cards={cards} loading={loading}/>
        )
    }
}
export default CardsContainer
