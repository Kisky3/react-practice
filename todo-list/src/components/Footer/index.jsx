import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
    render() {
        // Use reduce to achieve count number function
        // const finishedTaskNum = this.props.todos.reduce((pre, currentValue) =>
        //     pre + (currentValue.done ? 1: 0),0
        // );
        const countDone = this.props.todos.filter(todo =>  todo.done).length
        const taskLength = this.props.todos.length;
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" />
                    </label>
                    <span>
                        <span>Finished Tasks {countDone}</span> / All {taskLength} Tasks
                    </span>
                    <button className="footer-del-btn"> Delete Finished Task</button>
                </div>
            </div>
        );
    }
}
