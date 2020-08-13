import {
    FIRST_CARD_SELECTED,
    FIRST_CARD_SHOW,
    GET_CARDS,
    LOADING_IN_PROCESS,
    MATCH_CARDS, SET_RANDOM_POSITION_FOR_CARDS,
    VICTORY_COMPLETE
} from "../assets/constants";

import img_1 from '../assets/images/redux.png'
import img_2 from '../assets/images/react.svg'
import img_3 from '../assets/images/github.svg'
import img_4 from '../assets/images/js.svg'
import img_5 from '../assets/images/html.svg'
import img_6 from '../assets/images/css.svg'
import img_7 from '../assets/images/typescript.svg'
import img_8 from '../assets/images/typescript1.svg'

const initialState = {
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
    countClick: 0,
    loading: false
}
const playReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIRST_CARD_SHOW :
            debugger
            let activeCard = [...state.cards]
            if (!action.card.isActive)
                activeCard = activeCard.map(card => {
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
            debugger
            let showedCards = state.cards.filter(card => card.isActive)
            let newCards = [...state.cards]
            // let counterValue = state.countClick
            if (showedCards[0].title === showedCards[1].title && showedCards[0].id !== showedCards[1].id) {
                debugger
                // counterValue += 1
                newCards = newCards.map(card => {
                    if (card.id === showedCards[0].id || card.id === showedCards[1].id) {
                        return {...card, isSelected: true, isActive: false}
                    } else {
                        return card
                    }
                })
            } else {
                debugger
                // counterValue += 1
                newCards = newCards.map(card => {
                    return {...card, isActive: false}
                })
            }
            return {
                ...state,
                cards: newCards,
                // countClick: counterValue
            }
        case LOADING_IN_PROCESS:
            return {
                ...state,
                loading: !state.loading
            }
        case VICTORY_COMPLETE:
            debugger
            return {
                ...state,
                cards: state.cards.map(card => {
                    return {
                        ...card,
                        isActive: false,
                        isSelected: false
                    }
                }),
                // countClick: 0
            }
        case SET_RANDOM_POSITION_FOR_CARDS:
            debugger
            let randomCardPosition = [...state.cards]
            let random = (array) => {
                debugger
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            random(randomCardPosition)
            debugger
            return {
                ...state,
                cards: randomCardPosition
            }


    }

    return state
}
export default playReducer

export const openFirstCard = (card) => ({type: FIRST_CARD_SHOW, card})
export const compareCards = () => ({type: MATCH_CARDS})
export const isLoading = () => ({type: LOADING_IN_PROCESS})
export const victoryCase = () => ({type: VICTORY_COMPLETE})
export const shufflingCardsPosition = () => ({type: SET_RANDOM_POSITION_FOR_CARDS})
//
export const showCard = (card) => (dispatch, getState) => {
    debugger
    const state = getState()
    const {cards} = state.reducer
    let showCards = cards.filter(card => card.isActive)

    if (!card.isSelected && !card.isActive) {
        debugger
        dispatch(openFirstCard(card))
    }
    if (showCards.length !== 0 && !card.isSelected && !card.isActive) {
        debugger
        dispatch(isLoading())

        setTimeout(() => {
            dispatch(compareCards())
            dispatch(isLoading())
        }, 1000)
    }
}
// export const getCards = () => (dispatch) => {
//     debugger
//     dispatch(getCardsSuccess())
// }
// export const onFirstCardClick = (id) => (dispatch) => {
//     debugger
//     dispatch(firstCardSelectedSuccess(id))
// }
//
