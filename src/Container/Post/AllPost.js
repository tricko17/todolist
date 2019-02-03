import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Todo List</h1>
                {this.props.todos.map((todo) => <Post key={todo.id} todo={todo} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
export default connect(mapStateToProps)(AllPost);