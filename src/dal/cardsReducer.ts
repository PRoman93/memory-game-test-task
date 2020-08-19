import {
    FIRST_CARD_SHOW,
    LOADING_IN_PROCESS,
    MATCH_CARDS,
    SET_RANDOM_POSITION_FOR_CARDS,
    VICTORY_COMPLETE
} from "../assets/constants/constants";

import img_1 from '../assets/images/austria.svg'
import img_2 from '../assets/images/belarus.svg'
import img_3 from '../assets/images/belgium.svg'
import img_4 from '../assets/images/brazil.svg'
import img_5 from '../assets/images/britain.svg'
import img_6 from '../assets/images/france.svg'
import img_7 from '../assets/images/spain.svg'
import img_8 from '../assets/images/japan.svg'
import {
    cardType,
    compareCardsActionType,
    initialStateType,
    isLoadingActionType,
    openFirstCardActionType,
    shufflingCardsPositionActionType,
    victoryCaseActionType
} from "../types/cardsReducerTypes";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const initialState: initialStateType = {
    cards: [
        {id: 0, img: img_1, title: 'one', isActive: false, isSelected: false},
        {id: 1, img: img_1, title: 'one', isActive: false, isSelected: false},
        {id: 2, img: img_2, title: 'two', isActive: false, isSelected: false},
        {id: 3, img: img_2, title: 'two', isActive: false, isSelected: false},
        {id: 4, img: img_3, title: 'three', isActive: false, isSelected: false},
        {id: 5, img: img_3, title: 'three', isActive: false, isSelected: false},
        {id: 6, img: img_4, title: 'four', isActive: false, isSelected: false},
        {id: 7, img: img_4, title: 'four', isActive: false, isSelected: false},
        {id: 8, img: img_5, title: 'five', isActive: false, isSelected: false},
        {id: 9, img: img_5, title: 'five', isActive: false, isSelected: false},
        {id: 10, img: img_6, title: 'six', isActive: false, isSelected: false},
        {id: 11, img: img_6, title: 'six', isActive: false, isSelected: false},
        {id: 12, img: img_7, title: 'seven', isActive: false, isSelected: false},
        {id: 13, img: img_7, title: 'seven', isActive: false, isSelected: false},
        {id: 14, img: img_8, title: 'eight', isActive: false, isSelected: false},
        {id: 15, img: img_8, title: 'eight', isActive: false, isSelected: false},
    ],
    countClick: 1,
    loading: false
}
const cardsReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case FIRST_CARD_SHOW :
            let activeCard = [...state.cards]
            if (!action.card.isActive)
                activeCard = activeCard.map((card: cardType) => {
                    if (card.id === action.card.id) {
                        return {...card, isActive: true}
                    } else {
                        return card
                    }
                })
            return {
                ...state, cards: activeCard
            }
        case MATCH_CARDS:
            let showedCards = state.cards.filter((card: cardType) => card.isActive)
            let newCards = [...state.cards]
            let counterValue = state.countClick
            if (showedCards[0].title === showedCards[1].title && showedCards[0].id !== showedCards[1].id) {
                counterValue += 1
                newCards = newCards.map(card => {
                    if (card.id === showedCards[0].id || card.id === showedCards[1].id) {
                        return {...card, isSelected: true, isActive: false}
                    } else {
                        return card
                    }
                })
            } else {
                counterValue += 1
                newCards = newCards.map((card: cardType) => {
                    return {...card, isActive: false}
                })
            }
            return {
                ...state,
                cards: newCards,
                countClick: counterValue
            }
        case LOADING_IN_PROCESS:
            return {
                ...state,
                loading: !state.loading
            }
        case VICTORY_COMPLETE:
            return {
                ...state,
                cards: state.cards.map((card: cardType) => {
                    return {
                        ...card,
                        isActive: false,
                        isSelected: false
                    }
                }),
                countClick: 1
            }
        case SET_RANDOM_POSITION_FOR_CARDS:
            let randomCardPosition = [...state.cards]
            let random = (array: Array<cardType>) => {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            random(randomCardPosition)
            return {
                ...state,
                cards: randomCardPosition
            }
        default:
            return state

    }
}
export default cardsReducer

// actions
export const openFirstCard = (card: cardType): openFirstCardActionType => ({type: FIRST_CARD_SHOW, card})
export const compareCards = (): compareCardsActionType => ({type: MATCH_CARDS})
export const isLoading = (): isLoadingActionType => ({type: LOADING_IN_PROCESS})
export const victoryCase = (): victoryCaseActionType => ({type: VICTORY_COMPLETE})
export const shufflingCardsPosition = (): shufflingCardsPositionActionType => ({type: SET_RANDOM_POSITION_FOR_CARDS})

// types to actions
type CardsActionType =
    openFirstCardActionType
    | compareCardsActionType
    | isLoadingActionType
    | victoryCaseActionType
    | shufflingCardsPositionActionType

type ActionType = CardsActionType


//thunk types
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

// thunk
export const showCard = (card: cardType) => (dispatch: ThunkDispatchType, getState: () => AppStateType) => {
    /*getting cards array from state and filtering cards with prop isShow===true*/
    const state = getState()
    const {cards} = state.reducer
    let showCards = cards.filter(card => card.isActive)

    /*show the active card if it has not been shown or clicked*/
    if (!card.isSelected && !card.isActive) {
        dispatch(openFirstCard(card))
    }
    /*compare two cards if the first card is showed and second is not showed and guessed*/
    if (showCards.length !== 0 && !card.isSelected && !card.isActive) {
        /*prevent click on any card while comparing is going on*/
        dispatch(isLoading())
        /*after 1 sec delay comparing starts*/
        setTimeout(() => {
            dispatch(compareCards())
            dispatch(isLoading())
        }, 1000)
    }
}
