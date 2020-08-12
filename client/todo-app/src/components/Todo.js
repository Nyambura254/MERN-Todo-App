import React, { Component } from 'react'

export default class Todo extends Component {
    style = () => {
        const { complete } = this.props.todo
        return { textDecoration: complete ? "line-through" : "none" }
    }
    render() {
        //destructuring 
        const { title } = this.props.todo
        return (
            <h3 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
                <i className="far fa-times-circle fa-sm float-left m-1 text-danger"></i>{title}
                <input type="checkbox" className="m-2 float-right"></input>
            </h3>
        )
    }
}
