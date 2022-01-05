import React, {Component} from 'react'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">TODO LIST</header>
                <input className="header-input" type="text" placeholder="Input your tasks and press enter key"/>
            </div>
        )
    }
}
