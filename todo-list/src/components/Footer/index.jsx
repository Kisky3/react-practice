import React , { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" />
                    </label>
                    <span> 
                        <span>Finished Tasks 0</span> / All 2 Tasks
                    </span>
                    <button> Delete Finished Task</button>
                </div>
            </div>
        )
    }
}
