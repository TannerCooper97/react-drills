import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();

    this.state = {
      tasks: [],
      input: ""

    };

    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(value){
    this.setState({ input: value })
  }

  handleAddTask(){
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input:""
    });
  }

  render(){ 
    let tasks = this.state.tasks.map((element, index) => {
      return <Todo key={index} task={element}/>;
    })
  return ( <div className="App">
          <h1>My to-do list:</h1>
         
          <div>
          <input value={this.state.input} placeholder="Enter new task" onChange={e => this.handleInputChange(e.target.value)} />

          <button onClick={this.handleAddTask}> Add </button>
          </div>
          <br />
          {tasks}
          </div>
   
  );
  }
}

export default App;
