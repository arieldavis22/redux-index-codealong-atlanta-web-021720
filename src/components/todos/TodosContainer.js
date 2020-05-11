import React, { Component } from 'react';
import {connect} from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

    renderTodo = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo}/>)

    render() { 
        console.log(this.props.todos)
        return (  
            <div>
                {this.renderTodo()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);