import React from 'react';
import styles from './Card.module.css'
import {cardType} from "../../../../types/cardsReducerTypes";

type PropType = {
    card: cardType
    openCard: () => void
}
const Card: React.FC<PropType> = (props) => {


    const classForCard = props.card.isSelected ? `${styles.openedCard} ${styles.card}` : styles.card

    return (
        <div className={classForCard} onClick={props.openCard}>
            <img src={props.card.img} alt={props.card.title}
                 className={props.card.isActive ? styles.showedCard : styles.closedCard}/>
        </div>
    )
}
export default Card
