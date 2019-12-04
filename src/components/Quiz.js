import React from "react";
import {Link} from "react-router-dom";
import fetchQuizData   from "./../api/fetchQuizData";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from "./../data/data";
import {ActionTypes} from "../constants/actionTypes";
import Answers from "./Answers";

const mapStateToProps = state => { return { quiz: state.quiz, index: state.index } };

const mapDispatchToProps = dispatch => ({
    onQuizLoad: payload => dispatch({ type: ActionTypes.QuizLoad, payload }),
    onIndexUpdate: payload => dispatch({ type: ActionTypes.IndexUpdate, payload })
});

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isAnswered: false,
          showButton:false,
          score:0
        };
        this.index = 1;
        this.total = data.length

    }

    async componentDidMount(){
        await this.load();
        this.getQuestionToShow();
    }

    componentWillReceiveProps(nextProps){
        this.getQuestionToShow();
    }

    handleShowButton = ()=>{
        this.setState({
            isAnswered: true,
            showButton: true
        })
    }
    pasreData (data){
        const result = data.results;
        const dataSet = new Array();
        result.forEach((item)=>{
            dataSet.push({
                question:item.question,
                answers:['TRUE','FALSE'],
                correct:item.correct_answer ==="True" ? 1 : 2
            })
        })
        return dataSet;
    }
    load = () =>{
        let url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
            fetch(url).then(res => res.json()).then(res => {
                let quiz = this.pasreData(res);
                this.props.onQuizLoad(quiz);
                this.props.onIndexUpdate(this.index);
            });

    }

    getQuestionToShow = ()=>{
        const { quiz,index} = this.props;
        if(quiz){
            this.setState({
                question: quiz[this.props.index]
            })
        }
    };

    nextQuestion = ()=>{
        const { index } = this.props;
        let i = index;
        this.setState({
            isAnswered: false,
            showButton: false
        })

      this.props.onIndexUpdate(i+1);
      this.getQuestionToShow();
    };

    handleIncreaseScore = () =>{
      this.setState({
          score: this.state.score + 1
      })
    };

    onClickOfFinishQuiz = ()=>{
       this.props.onIndexUpdate(0);
    }




    render(){

       const { question, isAnswered, showButton } = this.state;

       if(this.props.quiz.length <=0 || !question){
           return <p>
               Loading.....
           </p>
       }

        return(
            <div>
              <header>
                  <h2 className="text-center font-weight-normal">Quiz Application</h2>
                  <hr />
              </header>
                <article>
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1">
                            <div id="question">
                                <h4>Question {this.props.index}/{this.total}</h4>
                                <p>{question.question}</p>
                            </div>
                            <Answers answers={question.answers} correct={question.correct} showButton={this.handleShowButton} isAnswered={isAnswered} increaseScore={this.handleIncreaseScore}/>
                        </div>
                    </div>
                </article>
                <footer>
                    <hr />
                    <div id="submit">
                            { showButton && this.props.index !== this.total ? <button className="fancy-btn" onClick={this.nextQuestion}> NEXT QUESTION</button> : showButton && this.props.index == this.total ?
                                <Link to={{pathname :"/result", params:{score: this.state.score, total: this.total }}} onClick={this.onClickOfFinishQuiz}>FINISH QUIZ</Link> : null}
                        </div>

                </footer>
            </div>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

