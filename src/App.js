import React, {useDebugValue, useEffect, useState} from 'react';
import './App.css';
import {getCards, onFirstCardClick, showCard, shufflingCardsPosition} from "./dal/dataReducer";
import {useDispatch, useSelector} from "react-redux";
import GamePageContainer from "./ui/gamePage/GamePageContainer";

function App() {


    // const dispatch = useDispatch()
    // const {cards, loading} = useSelector(el => el.reducer)
    //
    // const [start, changeStartState] = useState(false)
    // const [isAllCardsOpened, changeIsAllCardsOpened] = useState(false)
    //
    //
    // const firstLoading = () => {
    //     changeStartState(true)
    //     dispatch(shufflingCardsPosition())
    // }
    // const openCard = (card) => {
    //     dispatch(showCard(card))
    //     if (cards.every(card => card.isActive)) {
    //         changeIsAllCardsOpened(true)
    //     }
    // }
    // debugger
    // // const classForCards = loading ? `${'loading'} ${'card'}` : 'card'


    // const classForCards = props.isLoading ? `${styles.loading} ${styles.cards}` : styles.cards

    // const classForCards = loading ? `${'loading'} ${'cards'}` : 'cards'
    // const classForCard = !cards.isSelected ? `${'openedCard'} ${'card'}` : 'card'
    // const classs = cards.map(el=>el.isSelected)
    // console.log(classs)
    // const renderCards = cards.map(card =>
    //
    //     <div className={classForCard} onClick={() => openCard(card)}>
    //         <img src={card.img} className={card.isActive ? 'showedCard' : 'closedCard'}/>
    //     </div>)
    //
    //
    //
    {/*{!start*/
    }
    {/*    ? <button onClick={firstLoading}>start</button>*/
    }
    {/*    : <div className={'wrapper'}>*/
    }
    {/*        <div className={classForCards}>*/
    }
    {/*            {renderCards}*/
    }
    {/*        </div>*/
    }
    {/*    </div>}*/
    }
    {/*{isAllCardsOpened && <h3>You won!</h3>}*/
    }



    return (
        <GamePageContainer/>

    );

}

export default App;
