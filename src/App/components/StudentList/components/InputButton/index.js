import React from 'react';
import styles from './index.scss'


class InputButton extends React.Component {
  // TODO Feedback: studentName不需要存在state
  state = {
    inputMode: false,
    studentName: ""
  };

  componentDidMount() {

  }

  handleEnterKey = (e) => {
    if(e.keyCode === 13) {
      this.addNewStudent()
        .then( () => {
          this.setState({
          inputMode: false
        })})
        .then(this.props.updateStudentList)
        .catch(err => console.log(err))

    }
  };

  addNewStudent = () => {
    // TODO Feedback: URL和规定的API不符合
    return fetch('http://localhost:8080/trainee/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "studentName": this.state.studentName,
      })
    })
  };

  handleGetInputValue = (event) => {
    this.setState({
      studentName : event.target.value,
    })
  };

  render() {
    return <div className="addSInputBtnDiv">
      {this.state.inputMode ?
        <input className="addSInput" onKeyUp={this.handleEnterKey} value={this.state.studentName} onChange={this.handleGetInputValue}/> :
        // TODO Feedback: 不建议inline 方法
        <button className="addSBtn" onClick={() => this.setState({
          inputMode: true
        })}>+ 添加学生</button>}
    </div>;
  }
}

export default InputButton;
