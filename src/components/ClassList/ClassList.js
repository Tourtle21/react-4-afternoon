import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {console.log(res.data); this.setState({students:res.data})})
    .catch(err => console.log(err));
  }

  render() {
  const mappedStudents = this.state.students.map((student, i) => (<Link key={i} to={`/student/${student.id}`}><h3>{student.first_name} {student.last_name}</h3></Link>))
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {mappedStudents}
        <button onClick={() => this.props.history.goBack()} className='back-button'>{'<'} Back</button>
      </div>
    )
  }
}