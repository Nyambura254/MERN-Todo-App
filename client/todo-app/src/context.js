import React, { Component } from 'react'
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
            export class Provider extends Component {
                state = {
                    todos: [

                        {
                            id: 1,
                            title: "React In action",
                            complete: false
                        },
                        {
                            id: 2,
                            title: " MERN App",
                            complete: false
                        },
                        {
                            id: 3,
                            title: "Axios HTTP",
                            complete: false
                        }

                    ],
                    //to handle complete checkbox with action object
                    dispatch: (action) => this.setState(prevState => reducer(prevState, action))
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
