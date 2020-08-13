import React from "react";
import Cards from "./Cards";
import {useSelector} from "react-redux";

const CardsContainer = (props) => {

    console.log(props)
    const {cards, loading} = useSelector(state => state.reducer)

    if (cards.every(card => card.isSelected)) {
        return <div>
            <h2>You won!</h2> <button onClick={props.onStartClick}>play again</button>
        </div>
    } else {
        return (
            <Cards cards={cards} loading={loading}/>
        )
    }

}
export default CardsContainer
