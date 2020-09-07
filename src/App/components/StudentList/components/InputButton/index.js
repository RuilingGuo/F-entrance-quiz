import React from 'react';

// import styles from './index.scss'


class InputButton extends React.Component {
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
    return fetch('http://localhost:8080/student/student', {
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
    return <div>
      {this.state.inputMode ?
        <input onKeyUp={this.handleEnterKey} value={this.state.studentName} onChange={this.handleGetInputValue}/> :
        <button onClick={() => this.setState({
          inputMode: true
        })}>添加学生</button>}
    </div>;
  }
}

export default InputButton;