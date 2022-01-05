import React, {Component} from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                <li>
                    <label htmlFor="">
                        <input type="checkbox" />
                        <span>Itemxxxx</span>
                    </label>
                    <button style={{display: 'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
