import React, {Component} from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const {id, name, done} = this.props
        return (
            <div className="todo-item">
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={done}/>
                        <span>{name}</span>
                    </label>
                    <button className="todo-del-btn">删除</button>
                </li>
            </div>
        )
    }
}
