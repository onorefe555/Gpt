import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { ReactDOM } from "react-dom";
 
class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            click : 0,
            Remaining: 100
        }
    }
    clickMe(){
        this.setState({
            click: this.state.click+1,
            Remaining: this.state.Remaining-1
        })
    }
    render(props){
        return(
            <div>
                <h3 onClick={()=>this.clickMe()}>{this.props.name}</h3>
                <span>I click {this.props.name} for {this.state.click} times it is remaining {this.state.Remaining}</span>
            </div>
        )
    }
}
export default Navbar