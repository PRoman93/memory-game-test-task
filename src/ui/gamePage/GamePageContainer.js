import React from "react";
import GamePage from "./GamePage";
import {useDispatch} from "react-redux";
import {shufflingCardsPosition} from "../../dal/dataReducer";

const GamePageContainer = (props) => {

    const dispatch = useDispatch()

    const onStartClick = () => {
        debugger
        dispatch(shufflingCardsPosition())
    }


    return (
        <GamePage onStartClick={onStartClick}/>
    )
}
export default GamePageContainer
