import React, { Component } from "react";


class NavBar extends Component {

    handelClick=(value)=>{
            this.props.changeMode(value)
    }
    render(){
        return(
            <div>
                <button value='Work' onClick={this.handelClick}>Work mode</button>
                 <button value='Break' onClick={this.handelClick}>Break mode</button>
            </div>
        )
    }
}


export default NavBar
