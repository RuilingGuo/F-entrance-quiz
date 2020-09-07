import React from 'react';
import styles from './index.scss'

class InputP extends React.Component {
  state = {
    inputMode: false,
    teamName: ""
  };

  componentDidMount() {
    this.setState({
      teamName: this.props.teamName
    })
  }

  handleEnterKey = (e) => {
    if(e.keyCode === 13) {
      this.updateTeamName()
        .then( () => {
          this.setState({
          inputMode: false
        })})
        .then(this.props.updateStudentList)
        .catch(err => console.log(err))

    }
  };

  updateTeamName = () => {
    return fetch('http://localhost:8080/student/team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "teamId": this.props.teamId,
        "teamName": this.state.teamName,
      })
    })
  };

  handleGetInputValue = (event) => {
    this.setState({
      teamName : event.target.value,
    })
  };

  render() {
    return <div >
      {this.state.inputMode ?
        <input className="updateTeamName" onKeyUp={this.handleEnterKey} value={this.state.teamName} onChange={this.handleGetInputValue}/> :
        <p onClick={() => this.setState({
          inputMode: true
        })}>{this.state.teamName}</p>}
    </div>;
  }
}

export default InputP;