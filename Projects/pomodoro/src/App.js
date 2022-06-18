import React, { Component } from 'react';
import Clock from './components/Clock';
import ActionRow from './components/ActionRow';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      minutes:'25',
      seconds:'00',
      timer:'',
      isWorkMode:true,
      isActive:false
    }
  }

  pause=()=>{

  }

  start=()=>{
    setInterval(function () {
       this.tick()
    }, 1000);
  }

  reset=()=>{

  }

  finished=()=>{

  }

  changeMode=(mode)=>{
     console.log(mode)
  }

  tick=()=>{
     let minute = this.state.minutes
     if(this.state.minutes > 0){
       if(this.state.seconds === '00'){
         this.setState({
           minutes:minute-1,
           seconds:'59'
         })
       }
     }
  }
  render(){
    return(
      <div className='App'>
           <NavBar changeMode={this.changeMode} />
           <Clock minutes={this.state.minutes} seconds={this.state.seconds} />
           <ActionRow activateAction={this.state.tick} resetClicked={this.reset} currentAction={this.state.isActive} />
      </div>
    )
  }
}

export default App;
