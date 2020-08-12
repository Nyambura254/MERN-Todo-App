import React, { Component } from 'react'
//to create our context
const Context = React.createContext()
export class Provider extends Component {
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}

            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
