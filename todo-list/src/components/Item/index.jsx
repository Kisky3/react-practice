import React, {Component} from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        return (
            <div className="todo-item">
                <li>
                    <label>
                        <input type="checkbox" />
                        <span>Itemxxxx</span>
                    </label>
                    <button className="todo-del-btn">删除</button>
                </li>
            </div>
        )
    }
}
