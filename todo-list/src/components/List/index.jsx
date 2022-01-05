import React, {Component} from 'react'
import Item from '../Item'
export default class List extends Component{
    render() {
        return(
            <div>
                <ul className="todo-list">
                    <Item />
                    <Item />
                    <Item />
                </ul>
            </div>
        )
    }
}
