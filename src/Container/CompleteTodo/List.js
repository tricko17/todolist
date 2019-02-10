import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from '../Post/Post';

class List extends Component {
    render() {
        return (
            <div>
                <h1>Complete Todo List</h1>
                <hr/>
                {
                    this.props.todos
                        .filter((todo)=> todo.done)
                        .map((todo) => <Post key={todo.id} todo={todo} />)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    }
}
export default connect(mapStateToProps)(List);