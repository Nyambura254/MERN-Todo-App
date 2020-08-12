import React, { Component } from 'react';
import { Consumer } from '../context'

export default class AddTodo extends Component {
    state = {
        id: 4,
        title: "",
        complete: false
    }
    update = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    add = (dispatch, e) => {
        e.preventDefault()
        const newTodo = this.state;
        dispatch({ type: "ADD", payload: newTodo })
        this.setState({ title: "" })
    }
    render() {
        return (
            <Consumer>{value => {
                //destructuring
                const { dispatch } = value
                return <form onSubmit={this.add.bind(this, dispatch)}>
                    <input type="text" className="form-control rounded-0" placeholder="Write your todos here..." onChange={this.update} value={this.state.title}>
                    </input>
                    <button className="form-control rounded-0 btn-secondary" type="submit">Add Todo</button>
                </form>
            }}</Consumer>

        )
    }
}