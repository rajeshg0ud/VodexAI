import React, {Component} from 'react';
import './App.css';
import ProfileCard from './components/ProfileCards';

class App extends Component{

  render(){
    return (
      <div className="App">
        <ProfileCard title="Alexa" handle="@alexa77"/>
        <ProfileCard title="Cortana" handle="@cortana88"/>
        <ProfileCard title="Siri" handle="@siri99"/>
      </div>
    )
  }
}
export default App;