import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class Result extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        const  { params } = this.props.location;
        return (
            <div>
            <header>
                <h2 className="text-center font-weight-normal">Quiz Application</h2>
                <hr/>
            </header>
            <div className="text-center font-weight-normal">

                <div >You have completed the quiz.<br /> You got: <strong>  {params.score} </strong> out of <strong>{params.total}</strong> questions right.</div>
                    <Link to={"/"}><div className="fancy-btn">PLAY AGAIN</div></Link>
                    </div>
            </div>

                    )
                }
                    }