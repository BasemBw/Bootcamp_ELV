import React, { Component } from "react";


class ActionRow extends Component {
    resetFun=()=>{
           this.props.reset()
    }
    handelMode=()=>{
        
    }
    render(){
        return(
            <div>
               <button onClick={this.handelMode}>{this.props.currentAction ? "pause" : "start"}</button>
               <button onClick={this.resetFun}>reset</button>
            </div>
        )
    }
}


export default ActionRow
