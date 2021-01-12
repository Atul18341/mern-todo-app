import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

import CreateTodo from "./components/create-todo.component"
import EditTodo from "./components/edit-todo.component"
import TodoList from "./components/todos-list.component"

import logo from "./logo.jpg"
class App extends Component{
	render(){
		return(
		<Router>
		<div className="container">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="https://admin.omagric.com">
		  <img src={logo} width="100" height="100" alt="Logo"/>
		  </a>
		<Link to="/" className="navbar-brand"><h3>MERN-Todo App</h3></Link>
		<div className="collapse navbar-collapse">
		  <ul className="navbar-nav mr-auto">
		    <li className="navbar-item">
			<Link to="/" className="nav-link">Todos</Link>
			</li>
			<li className="navbar-item">
			<Link to="/create" className="nav-link">Create Todos</Link>
			</li>
			</ul>
			</div>
		</nav>
		<br/>
		<Route path="/" exact component={TodoList} />
		<Route path="/edit/:id" component={EditTodo} />
		<Route path="/create" component={CreateTodo} />
		</div>
		</Router>
		);
    }
}

export default App;
