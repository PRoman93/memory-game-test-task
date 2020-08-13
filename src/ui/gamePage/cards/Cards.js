import React from "react";
import CardContainer from "./card/CardContainer";
import styles from './Cards.module.css'

const Cards = (props) => {

    const cardsElements = props.cards.map(card => <CardContainer key={card.id} card={card}/>)

    const classForCards = props.loading ? `${styles.loading} ${styles.cards}` : styles.cards

    return (
        <div className={classForCards}>
            {cardsElements}
        </div>
    )
}
export default Cards
