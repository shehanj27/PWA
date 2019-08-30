import React, { Component } from 'react'
import WalkingMario from './Layouts/walkingmario'
import StandMario from './Layouts/standMario'
import Sidebar from './Layouts/SideBar'
import Data from './Layouts/Data'


var state={Mario:Boolean(0)}

function Imagerender(){
  
  if(state.Mario){
    return <StandMario/>;
    }
    else{
      return <WalkingMario/>;
    }
}


class App extends Component {
  render() {

    setTimeout(()=>{
      this.setState({Mario:Boolean(1)}) ;   
    },1000)

    return (
      <div className="App">{}
      <Sidebar/>
      {Imagerender()}
      <Data/>
      </div>
    );
  }
}


export default App;
