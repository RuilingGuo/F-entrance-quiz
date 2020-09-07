import React from 'react'
import styles from './index.scss'


class StudentTeam extends React.Component {
  state ={
    studentTeamList: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/student/teams",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        studentTeamList: data
      }))
      .catch(err => console.log(err))
  }

  handleGroupStudent = () =>{
    fetch("http://localhost:8080/student/teams",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        studentTeamList: data
      }))
      .catch(err => console.log(err))
  }

  render() {
    return <div className="teamDiv">
      <div className="teamHeader">
        <h1>分组列表</h1>
        <button onClick={this.handleGroupStudent}>分组学员</button>
      </div>
      {this.state.studentTeamList.map(team => {
        if(team.studentList.length===0){
          return
        }
          return(
            <div key={team.id} className="teamContent">
              <div className="teamName">
                <p>{team.name}</p>
              </div>
              <div className="studentList">
                {team.studentList.map(student => {
                  return (<div key={student.id} className="student"><p>{student.id}.{student.name}</p></div>)
                })}
              </div>
            </div>
          )
        }
      )}

    </div>;
  }
}

export default StudentTeam;