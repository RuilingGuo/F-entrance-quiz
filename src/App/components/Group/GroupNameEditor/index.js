import React from 'react';
import styles from './index.scss'

class GroupNameEditor extends React.Component {
  state = {
    inputMode: false,
    groupName: ""
  };

  componentDidMount() {
    this.setState({
      groupName: this.props.groupName
    })
  }

  handleEnterKey = (e) => {
    if(e.keyCode === 13) {
      this.updateGroupName()
        .then( () => {
          this.setState({
          inputMode: false
        })})
        .then(this.props.updateStudentList)
        .catch(err => console.log(err))

    }
  };

  updateGroupName = () => {
    return fetch(`http://localhost:8080/groups/${this.props.groupId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: this.state.groupName,
    })
  };

  handleGetInputValue = (event) => {
    this.setState({
      groupName : event.target.value,
    })
  };

  render() {
    return <div >
      {this.state.inputMode ?
        <input className="updateGroupName" onKeyUp={this.handleEnterKey} value={this.state.groupName} onChange={this.handleGetInputValue}/> :
        <p onClick={() => this.setState({
          inputMode: true
        })}>{this.state.groupName}</p>}
    </div>;
  }
}

export default GroupNameEditor;