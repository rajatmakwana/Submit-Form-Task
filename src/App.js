import React, { Component } from 'react';
import './App.css';
import  ShowDiv  from './ShowDiv';
import UserForm from './UserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state[{
    
    }];
  }
  render() {


    return (
      <div className="App">
        <h1>Example Mania</h1>
        <div id="column">
          <div id="row1">
           <UserForm userInfoForm={this.props.userInfo}  />
          </div>
          <ShowDiv  showDivValue={this.props.value}/>
        </div>
      </div>
    );
  }
}

export default App;
