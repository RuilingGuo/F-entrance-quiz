import React from 'react'
import styles from './index.scss'
import InputButton from './components/InputButton/index'


class StudentList extends React.Component {
  state ={
    studentList: []
  }

  componentDidMount() {
    this.updateStudentList()
  }

  updateStudentList = () => {
    fetch("http://localhost:8080/student/students",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        studentList: data
      }))
      .catch(err => console.log(err))
  }

  render() {
    return <div className="studentDiv">
      <h1 style={{margin: 10}}>学员列表</h1>
      <div className="studentList">
        {this.state.studentList.map(student => {
        return (<div key={student.id} className="student"><p>{student.id}.{student.name}</p></div>)
      })}
        <div className="addStudentBtn">
        <InputButton updateStudentList={this.updateStudentList}/>
        </div>
      </div>
    </div>;
  }
}

export default StudentList;