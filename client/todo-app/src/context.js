
import React, { Component } from 'react'
import axios from 'axios';
//to create our context
const Context = React.createContext()

const reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                todos: prevState.todos.map(todos => {
                    if (todos.id === action.payload) { todos.complete = !todos.complete };
                    return todos
                }
                )
            }
        case "REMOVE":
            return {
                todos: prevState.todos.filter(todo => todo._id !== action.payload)
            }
        case "ADD":
            return {
                todos: [...prevState.todos, action.payload]
            }


        default:
            return prevState;
    }
}

export class Provider extends Component {
    state = {
        todos: [],
        //to handle complete checkbox with action object
        dispatch: (action) => this.setState(prevState => reducer(prevState, action))
    }
    componentDidMount() {
        axios.get('/todos')
            .then(res => props.setState({ todos: res.data }))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}

            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
