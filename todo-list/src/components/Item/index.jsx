import React, {Component} from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouse: false}

    handleMouse = (flag) => {
        return() => {
            this.setState({mouse: flag})
        }
    }

    delTodo = (id) => {
        return() => {
            this.props.delTodo(id)
        }
    }

    handleCheck = () => {
        this.props.handleCheck(this.props.id, !this.props.done);
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
                        <input type="checkbox" onChange={this.handleCheck} defaultChecked={done}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={this.delTodo(id)} className="todo-del-btn" style={{display: mouse? 'block' : 'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
