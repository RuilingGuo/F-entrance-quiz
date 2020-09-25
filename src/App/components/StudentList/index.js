import React from 'react'
import styles from './index.scss'
import InputButton from './components/InputButton/index'


class StudentList extends React.Component {
  state ={
    studentList: []
  }

  componentDidMount() {
    // TODO Feedback: update有歧义，其实是get studentList
    this.updateStudentList()
  }

  updateStudentList = () => {
    // TODO Feedback: 请求和业务逻辑耦合在一起，建议把获取数据的逻辑提取到单独的方法中
    fetch("http://localhost:8080/trainees",{
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
    {/*// TODO Feedback: 命名里不应该出现div*/}
    return <div className="trainees-div">
      {/*// TODO Feedback:建议用语义标签*/}
      <h1 style={{margin: 10}}>学员列表</h1>
      <div className="group-content-list">
        {this.state.studentList.map(student => {
        return (
          <div key={student.id} className="list-item"><p>{student.id}.{student.name}</p></div>
        )
      })}
        {/*// TODO Feedback:class命名不符合规范，不建议用驼峰*/}
        <div className="addStudentBtn">
        <InputButton updateStudentList={this.updateStudentList}/>
        </div>
      </div>
    </div>;
  }
}

export default StudentList;
