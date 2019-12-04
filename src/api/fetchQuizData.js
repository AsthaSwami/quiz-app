import {fetchQuizDataPending, fetchQuizDataSuccess, fetchQuizDataError} from './../actions/action';

function fetchQuizData() {
    return dispatch => {
        dispatch(fetchQuizDataPending());
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchQuizDataSuccess(res.quizData));
                return res.quizData;
            })
            .catch(error => {
                dispatch(fetchQuizDataError(error));
            })
    }
}

export default fetchQuizData;