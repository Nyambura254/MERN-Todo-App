import React, { Component } from 'react'
//to create our context
const Context = React.createContext()
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
                title: "This a complete MERN App",
                complete: false
            },
            {
                id: 3,
                title: "Axios HTTP",
                complete: false
            }

        ]
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
