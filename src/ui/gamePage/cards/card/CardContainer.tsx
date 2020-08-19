import React from "react";
import Card from "./Card";
import {useDispatch} from "react-redux";
import {showCard} from "../../../../dal/cardsReducer";
import click from '../../../../assets/sounds/click.mp3'
import {cardType} from "../../../../types/cardsReducerTypes";

type PropType = {
    card:cardType
    key:number
}
const CardContainer: React.FC<PropType> = (props) => {

    const dispatch = useDispatch()

    const openCard = () => {
        dispatch(showCard(props.card))
        // sound of click when every card picks
        new Audio(click).play()
    }
    return (
        <Card card={props.card} openCard={openCard}/>
    )
}
export default CardContainer
