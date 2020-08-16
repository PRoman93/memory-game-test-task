import React from "react";
import Card from "./Card";
import {useDispatch} from "react-redux";
import {showCard} from "../../../../dal/dataReducer";
import click from '../../../../assets/sounds/click.mp3'

const CardContainer = (props) => {

    const dispatch = useDispatch()

    const openCard = () => {
        dispatch(showCard(props.card))
        new Audio(click).play()
    }
    return (
        <Card card={props.card} openCard={openCard}/>
    )
}
export default CardContainer
