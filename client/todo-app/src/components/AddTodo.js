import React, { Component } from 'react'

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
    render() {
        return (

            <form>
                <input type="text" className="form-control rounded-0" placeholder="Write your todos here..." onChange={this.update} value={this.state.value}>
                </input>
                <button className="form-control rounded-0 btn-secondary" type="submit">Add Todo</button>
            </form>
        )
    }
}
