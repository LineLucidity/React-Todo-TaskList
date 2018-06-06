import React, { Component } from 'react';
import './App.css';
import '@fortawesome/react-fontawesome'
import Modal from './Modal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

class TaskList extends React.Component {
  render() {
  return (
    <div id="task" className="col-xs-2">
      <ul className="list-group">
        <li className="list-group-item">{this.props.title}</li>
        <li className="list-group-item">{this.props.date}</li>
      </ul>
    </div>
  )
}
}

TaskList.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpen: false,
      startDate: moment(),
      taskName: "",
      tasks: []
    };

    this.createTask = this.createTask.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleDate({date}) {
    this.setState({
      startDate: date
    });
  }

  handleChange({ target }) {
    this.setState({
      taskName: target.value
    });
  }

  createTask() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    
    let new_task = { title: this.state.taskName, date: this.state.startDate.toString() };

    this.setState({
      tasks: [...this.state.tasks, new_task]
    })
  }
  
  render() {
    let users_tasks = this.state.tasks.map((data, index) => {
      return (
        <TaskList key={index} title={data.title} date={data.date} />
      )
    });

  return (
        <div className="container">
      <h3>Add a task to get started...</h3>
      <hr />
      <div id="test">
      {users_tasks}
      </div>
      <span id="addTask" onClick={this.toggleModal} className="fa fa-plus-circle fa-5x pull-right"></span>
      <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <p>What is to be done?</p>
          <input 
          placeholder="Enter task name"
          onChange={ this.handleChange } />
          <br />
          <p>Due date</p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDate}/>
          <br />
          <button type="button" className="btn btn-primary" onClick={this.createTask}>Add Task</button>
      </Modal>
    </div>
  )
}
}

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ToDo Task List</h1>
        </header>
        <ToDo />
      </div>
    );
  }
}

export default App;
