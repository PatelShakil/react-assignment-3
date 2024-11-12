import React, { Component } from 'react';
import TaskList from './TaskList';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskTitle: '',
      newTaskMessage: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addTask = (event) => {
    event.preventDefault();
    const { newTaskTitle, newTaskMessage, tasks } = this.state;
    if (newTaskTitle && newTaskMessage) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        message: newTaskMessage,
        completed: false
      };
      this.setState({
        tasks: [...tasks, newTask],
        newTaskTitle: '',
        newTaskMessage: ''
      });
    }
  };

  toggleTaskCompletion = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  };

  render() {
    return (
        <div className={'task-manager-container'}>
          <h1>Task Manager</h1>
          <form className={'task-form'} onSubmit={this.addTask}>
            <input
                type="text"
                name="newTaskTitle"
                placeholder="Task Title"
                value={this.state.newTaskTitle}
                onChange={this.handleInputChange}
            />
            <input
                type="text"
                name="newTaskMessage"
                placeholder="Task Message"
                value={this.state.newTaskMessage}
                onChange={this.handleInputChange}
            />
            <button type="submit">Add Task</button>
          </form>
          <TaskList
              tasks={this.state.tasks}
              onToggleComplete={this.toggleTaskCompletion}
              onDeleteTask={this.deleteTask}
          />
        </div>
    );
  }
}

export default TaskManager;
