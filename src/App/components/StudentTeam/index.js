import React from 'react'
import styles from './index.scss'


class StudentTeam extends React.Component {
  state ={
    studentTeamList: []
  }

  componentDidMount() {

  }

  handleClickGroupStudent = () =>{
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

  render() {
    return <div className="teamDiv">
      <div>
        <h1>分组列表</h1>
        <button onClick={this.handleClickGroupStudent}>分组学员</button>
      </div>
      {this.state.studentTeamList.map(team => {
          return(
            <div>
              <div>
                <p>{team.name}</p>
              </div>
              <div>
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