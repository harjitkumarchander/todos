import React, { Component } from 'react';
import './App.css';
import Topbar from './Topbar';
import Todos from './Todos';
import Todo from './Todo';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      task : "",
      todos : [],
      show : false,
      inp : ''
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      task : e.target.value
    })
  }

  addTodos = (e) => {
    e.preventDefault();
    if(this.state.task === '') {
      alert("list cant be empty")
    }else{
    

    const todos = this.state.todos;
    todos.push({
      id: Math.random(),
      task : this.state.task,
      isCompleted : false
    })
    this.setState({
      task : '',
      todos : todos
    })
    console.log(this.state.todos)
  }
}
  removeTodo = (id) => {
    const todoIndex = this.state.todos.findIndex((todo)=> todo.id === id);
    const todos = this.state.todos;
    todos.splice(todoIndex, 1);
    this.setState({
      todos : todos
    })
  }

  updateTodo = (id) => {
    const todoIndex = this.state.todos.findIndex((todo)=> todo.id === id);
    const todos = this.state.todos;
    todos[todoIndex].isCompleted = true
    this.setState({
      todos : todos
    })
  }

  showModal = () => {
    this.setState({
      show : true
    })
  }

  changeInput = (e) => {
    this.setState({
      task : e.target.value
    })
    console.log(e.target.value)
  }
  render(){
    return (
      <div className="App">
        <Topbar />  
        <br /> 
        <Todos task={this.state.task} onChangeHandler={this.onChangeHandler} addTodos={this.addTodos} />
        <hr />
      <div>
          {
            this.state.todos.map((todo)=>{
              return(
                <Todo {...todo} 
                key={todo.task}
                removeTodo={this.removeTodo} 
                updateTodo={this.updateTodo} 
                showModal={this.showModal} 
                inp={this.state.inp}
                changeInput={this.changeInput}
                />
              );
            })
          }
        </div>
        <Footer />
      </div>
    );
  } 
}
export default App;
