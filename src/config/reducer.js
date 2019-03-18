import{
    ADD_CARD,
    REMOVE_CARD,
    KNOW,
    DONT_KNOW,
    SHOW_AGAIN,
    DONT_SHOW,
    EMPTY_LIST
} from './actionTypes';

const defaultState = {
    reviewList:[],
    aList:[], //I know it!
    bList:[], // What's this?..
    cList:[], //No need for review anymore!
    dList:[], // Definetely need to look again!
};

const appReducer = (state = defaultState, action) => {

    switch(action.type) {
        case ADD_CARD: {
            return{
                ...state,
                reviewList:state.reviewList.concat([Object.assign(action.newCard)])
            }
        }
        
        case KNOW: {
            return{
                ...state,
                aList:state.aList.concat([Object.assign(action.newCard)])
            }
        }

        default:
         return state;
    }
};

const rootReducer = (state,action) => {
    return appReducer(state,action)
}

export {defaultState, rootReducer}