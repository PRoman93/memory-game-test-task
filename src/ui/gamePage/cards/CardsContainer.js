import React, {useState} from "react";
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../common/Button";
import styles from './Cards.module.css'
import {shufflingCardsPosition, victoryCase} from "../../../dal/dataReducer";

const CardsContainer = (props) => {

    const dispatch = useDispatch()
    const [start, setStart] = useState(false)

    const onButtonClick = () => {
        dispatch(shufflingCardsPosition())
        dispatch(victoryCase())
        setStart(true)
    }
    const {cards, loading} = useSelector(state => state.reducer)


    if (cards.every(card => card.isSelected) && !start) {
        return <div className={styles.contentWrapper}>
            <h2 className={styles.header}>You won!</h2><Button onClick={onButtonClick} text={'play again'}/>
        </div>
    } else {
        return (
            <Cards cards={cards} loading={loading}/>
        )
    }
}
export default CardsContainer
