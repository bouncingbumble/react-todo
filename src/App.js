import React, { Component } from 'react';
import './App.css';

const TodoItem = ({text}) => (<li>{text}</li>)

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newTodo: '', 
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({todos, newTodo: ''});
  }

  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t,i)=> (<TodoItem key={i} text={t}/>))
    return (
      <div className='app'>      
        <h1>ToDoApp</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            className="todo-input"
            type="text" 
            name="newTodo"
            value={newTodo}
            onChange={(e) => this.setState({[e.target.name]: e.target.value})} 
            placeholder='What needs to be done?'>
          </input>
          <button
            type="submit"
            className="save-button"
          >
          SAVE
          </button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>

    );
  }
}

export default App;
