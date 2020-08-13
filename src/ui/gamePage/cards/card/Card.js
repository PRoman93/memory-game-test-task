import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {

    // const classForCard = props.card.isSelected ? `${styles.openedCard} ${styles.card}` : styles.card

    const classForCard = props.card.isSelected ? `${styles.openedCard} ${styles.card}` : styles.card
    console.log(props.card)

    return (
        <div className={classForCard} onClick={props.openCard}>
            <img src={props.card.img} alt={props.card.title}
                 className={props.card.isActive ? styles.showedCard : styles.closedCard}/>
        </div>
    )
}
export default Card
