import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <h1 className="text-dark text-center p-1 bg-light">
                <i className="far fa-times-circle fa-sm float-left m-1"></i>Task
                <input type="checkbox" className="m-2 float-right"></input>
            </h1>
        )
    }
}
