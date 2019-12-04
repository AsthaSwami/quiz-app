import React from "react";
import PropTypes from 'prop-types'
export default class Answers extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            classNames: ['', '']
        }

    }



    componentWillReceiveProps(nextProps){
        if(this.props.answers !== nextProps.answers){
            this.setState({
                classNames: ['', '']
            })
        }
   }




    checkAnswer = (e) => {

        let {isAnswered} = this.props;

        if (!isAnswered) {
            let elem = e.currentTarget;
            let {correct, increaseScore} = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if (answer === correct) {
                updatedClassNames[answer - 1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer - 1] = 'wrong';
            }

            this.setState({
                classNames: updatedClassNames
            })

            this.props.showButton();
        }

    };

    render(){
        const { answers } = this.props;
        const { classNames } = this.state;
        return (
            <div>
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
                    <li onClick={this.checkAnswer} className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
                </ul>
            </div>

            </div>
        );
    }
}