import React, { Component} from "react";

class Button extends Component {

    render() {

        return(

            <div>

                <button class="calc-button">{this.props.symbols}</button>
            </div>


        );
    }
}

export default Button;