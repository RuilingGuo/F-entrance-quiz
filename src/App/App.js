import React, { Component } from 'react';
import './App.scss';
import StudentList from "./components/StudentList/index"
import Group from "./components/Group/index"

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/*// TODO Feedback:GroupList命名更合理*/}
        <Group/>
        <StudentList/>
      </div>
    );
  }
}

export default App;
