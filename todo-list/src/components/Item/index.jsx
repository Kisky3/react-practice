import React, {Component} from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouse: false}

    handleMouse = (flag) => {
        return() => {
            this.setState({mouse: flag})
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <div className="todo-item">
                <li 
                    onMouseLeave={this.handleMouse(false)} 
                    onMouseEnter={this.handleMouse(true)}
                    style={{backgroundColor: this.state.mouse ? '#d3d3d3': '#ddd'}}
                >
                    <label>
                        <input type="checkbox" defaultChecked={done}/>
                        <span>{name}</span>
                    </label>
                    <button className="todo-del-btn" style={{display: mouse? 'block' : 'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
