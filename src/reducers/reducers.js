import { ActionTypes } from "./../constants/actionTypes";

let initialQuiz = {
    quiz:[],
    index:0
}

export default (state = { ...initialQuiz }, action) => {
    switch (action.type) {
        case ActionTypes.IndexUpdate:
            return {
                ...state, index: action.payload
            }
        case ActionTypes.QuizLoad:
            return {
                ...state, quiz: action.payload
            }
            default:
            return state;
    }
}