import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        //destructuring
        const { title } = this.todo
        return (
            <h1 className="text-dark text-center p-1 bg-light border-bottom">
                <i className="far fa-times-circle fa-sm float-left m-1 text-danger"></i>{title}
                <input type="checkbox" className="m-2 float-right"></input>
            </h1>
        )
    }
}
