import React, { Component } from 'react'
import Todo from './Todo';
//import consumer from context to avoid hand entry of todos
import { Consumer } from '../context';
export default class Todos extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        //destructuring
                        const { todos } = value
                        return todos.map(todos => <Todo todo={todos} key={todos.id}></Todo>)
                    }
                }
            </Consumer>

        )
    }
}
