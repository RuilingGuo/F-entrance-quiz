import React, { Component } from 'react';
import './App.scss';
import StudentList from "./components/StudentList/index"
import Group from "./components/Group/index"

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group/>
        <StudentList/>
      </div>
    );
  }
}

export default App;
