import React from "react";
import GamePage from "./GamePage";
import {useDispatch, useSelector} from "react-redux";
import {shufflingCardsPosition} from "../../dal/cardsReducer";
import music from '../../assets/sounds/Dawn.mp3'
import {AppStateType} from "../../dal/store";

const GamePageContainer = () => {

    const dispatch = useDispatch()

    const {countClick, cards} = useSelector((state: AppStateType) => state.reducer)
    const onStartClick = () => {
        dispatch(shufflingCardsPosition())
        //sound starts playing only when game begins
        new Audio(music).play()
    }

    return (
        <GamePage cards={cards} onStartClick={onStartClick} counter={countClick}/>
    )
}
export default GamePageContainer
