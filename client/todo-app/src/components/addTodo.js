import React, { Component } from 'react'

export default class addTodo extends Component {
    render() {
        return (

            <form>
                <input type="text" className="form-control rounded-0">
                </input>
                <button className="form-control rounded-0 btn-secondary" type="submit">Add Todo</button>
            </form>
        )
    }
}
