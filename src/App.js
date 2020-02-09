// src.App.js

import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
// import Create from './components/Create';
import Posts from './components/Posts';
import ToolBar from './components/Tools';

class App extends Component {
  constructor() {
    super();
    this.state = {
        tool: 'create'
    };
    this.getToolsState = this.getToolsState.bind(this);
  }
  getToolsState(s){
    this.setState({tool: s})
    console.log("Parent"+this.state.create)
  }
  render() {
    return (
      <div>
        <Header/>
        <Posts tool={this.state.tool}/>
        <ToolBar tool='create' update={this.getToolsState}/>
      </div>
    );
  }
}
export default App;