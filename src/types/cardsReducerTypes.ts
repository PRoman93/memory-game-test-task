import {FIRST_CARD_SHOW, MATCH_CARDS, LOADING_IN_PROCESS, VICTORY_COMPLETE, SET_RANDOM_POSITION_FOR_CARDS} from "../assets/constants/constants";

export type initialStateType = {
    cards: Array<cardType>
    countClick: number
    loading: boolean
}

export type cardType = {
    id: number
    img: string
    title: string
    isActive: boolean
    isSelected: boolean
}

export type openFirstCardActionType = {
    type: typeof FIRST_CARD_SHOW
    card: cardType
}
export type compareCardsActionType = {
    type: typeof MATCH_CARDS
}
export type isLoadingActionType = {
    type: typeof LOADING_IN_PROCESS
}
export type victoryCaseActionType = {
    type: typeof VICTORY_COMPLETE
}
export type shufflingCardsPositionActionType = {
    type: typeof SET_RANDOM_POSITION_FOR_CARDS
}
