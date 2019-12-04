import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./Welcome";
import Quiz from "./Quiz";
import Result from "./Result";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class App extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <Router>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/quiz" component={Quiz}/>
                    <Route path="/result" component={Result}/>
                </Switch>
                </Router>
            </div>
        )
    }
}