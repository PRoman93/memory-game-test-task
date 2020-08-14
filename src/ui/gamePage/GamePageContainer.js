import React from "react";
import GamePage from "./GamePage";
import {useDispatch, useSelector} from "react-redux";
import {shufflingCardsPosition} from "../../dal/dataReducer";

const GamePageContainer = (props) => {

    const dispatch = useDispatch()

    const {countClick, cards} = useSelector(state => state.reducer)
    const onStartClick = () => {
        dispatch(shufflingCardsPosition())
    }

    return (
        <GamePage cards={cards} onStartClick={onStartClick} counter={countClick}/>
    )
}
export default GamePageContainer
