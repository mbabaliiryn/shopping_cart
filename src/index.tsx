import {mount, route} from 'navi';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-navi';

import './index.css';
import HomePage from './components/auth/HomePage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import AddStock from './components/SellerPage';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import AvailableStock from './components/Buyer';
import {TodoList} from './TodoList';
import AddTodoForm from './AddTodoForm';
import Order from './components/Order';
import Report from './components/Report';
import Footer from './components/Footer';
import './styles/HomePage.css';
import './styles/Navbar.css';
import './styles/Footer.css'
import AppApi from "./components/utils/Api";
// import { AddTodoForm } from './AddTodoForm';
const initialTodos: Todo[] = [
    {text: 'Walk the dog', complete: false,}, {text: 'Write app', complete: true,},
];

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {...todo, complete: !todo.complete,};
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (text: string) => {
        const newTodo = {text, complete: false};
        setTodos([...todos, newTodo]);
    };

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={addTodo}/>
        </>
    );
}

export default App;

const routes = mount({
    "/": route({title: 'Home', view: <HomePage/>}),
    "login": route({title: 'Login', view: <LoginPage/>}),
    "register": route({title: 'Register', view: <RegisterPage/>}),
    "seller": route({title: 'Product', view: <AddStock/>}),
    "buyer": route({title: 'ProductProp', view: <AvailableStock/>}),
    "order": route({title: 'Order', view: <Order/>}),
    "report": route({title: 'Report', view: <Report/>}),
    "footer": route({title: 'Report', view: <Footer/>})
})

ReactDOM.render(
    <React.StrictMode>
        <Router routes={routes}/>
        <AppApi/>
    </React.StrictMode>,
    document.getElementById('root')
);

