import React, { Component } from 'react';
import './App.scss';
import StudentList from "./components/StudentList/index"
import StudentTeam from "./components/StudentTeam/index"

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <StudentTeam/>
        <StudentList/>
      </div>
    );
  }
}

export default App;
