import React from 'react'
import styles from './index.scss'
import GroupNameEditor from './components/GroupNameEditor';


class Group extends React.Component {
  state ={
    groupList: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/groups",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        groupList: data
      }))
      .catch(err => console.log(err))
  }

  handleAutoGrouping = () =>{
    fetch("http://localhost:8080/groups/auto-grouping",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        groupList: data
      }))
      .catch(err => console.log(err))
  }

  render() {
    // TODO Feedback: div嵌套层次太深
    return <div className="group-div">
      <div className="group-header">
        <h1>分组列表</h1>
        <button onClick={this.handleAutoGrouping} className="group-auto-group__btn">分组学员</button>
      </div>
      {this.state.groupList.map(group => {
        if(group.trainees.length===0){
          return
        }
          return(
            <div key={group.id} className="group-content">
              <div className="group-name">
                <GroupNameEditor groupName = {group.name} groupId={group.id}/>
              </div>
              <div className="group-content-list">
                {group.trainees.map(trainee => {
                  return (<div key={trainee.id} className="list-item"><p>{trainee.id}.{trainee.name}</p></div>)
                })}
              </div>
            </div>
          )
        }
      )}

    </div>;
  }
}

export default Group;
