import React,{ useState }  from "react";
import { Link } from "react-router-dom";
 export default class Welcome extends React.Component{

     render(){
         return(
           <div>
           <header>
               <h2 className="text-center font-weight-normal">Quiz Application</h2>
               <h4>Press the START button to play the quiz</h4>
               <hr />
           </header>
           <div className="start-button">
               <Link to={"/quiz"}>
                   <div className="btn btn-primary">START THE QUIZ</div>
               </Link>


           </div>
           </div>
       )
   }
 }


