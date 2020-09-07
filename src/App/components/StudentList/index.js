import React from 'react'
import styles from './index.scss'


class StudentList extends React.Component {
  state ={
    studentList: []
  }

  componentDidMount() {
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
    return <div>
      <h1>学员列表</h1>
      <h1>{this.state.studentList.map(student => {
        return (<div key={student.id} className="student"><p>{student.id}.{student.name}</p></div>)
      })}</h1>
    </div>;
  }
}

export default StudentList;