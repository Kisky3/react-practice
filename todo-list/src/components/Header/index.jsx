import React, {Component} from 'react'
import './index.css'
export default class Header extends Component {
    handleInput = (event)=> {
        const {keyCode, target} = event
        // wait until user finish input
        if (keyCode !== 13) return
        // create a todo obj and then return to app.vue
        const todoObj = {id:Date.now(), name:target.value, done:false }
        this.props.addTodo(todoObj);
        target.value = "";
    }
    render() {
        return (
            <div>
                <header className="header">TODO LIST</header>
                <input onKeyUp={this.handleInput} className="header-input" type="text" placeholder="Input your tasks and press enter key"/>
            </div>
        )
    }
}
