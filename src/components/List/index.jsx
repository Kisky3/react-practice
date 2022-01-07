import React, {Component} from 'react'
import Item from '../Item'
export default class List extends Component{
    render() {
        const {todos} = this.props
        return(
            <div>
                <ul className="todo-list">
                    {
                        todos.map(todo => {
                            return <Item key={todo.id} {...todo} delTodo={this.props.delTodo} handleCheck={this.props.handleCheck}/> 
                        })
                    }
                </ul>
            </div>
        )
    }
}
