import React, {Component} from "react";

class IntroMessage extends Component {

    render() {

        return(
            <div className="IntroMessage">
                <center><strong><h1>Calculator using React.js</h1></strong></center>
                <h3>A simple calculator made while learning "The Complete Full-Stack JavaScript Course!" by Joseph Delgadillo and Nick Germaine.</h3>
                <h2>Udemy Link: <a className="link" href="https://www.udemy.com/course/full-stack-javascript/">Get the course!</a></h2>
                <h2>Udemy Link: <a className="link" href="https://github.com/saditrahman/Calculator-with-React.js">Get the source code!</a></h2>
            </div>
        );
    }
}

export default IntroMessage;