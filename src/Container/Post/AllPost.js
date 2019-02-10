import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class AllPost extends Component {

    state={
        todos: this.props.todos.filter((todo) => todo.done === false)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            todos: nextProps.todos.filter((todo) => todo.done === false)
        })
    }

    render() {
        return (
            <div>
                <h1>All Todo List</h1>
                <hr/>
                {this.state.todos.map((todo) => <Post key={todo.id} todo={todo} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    }
}
export default connect(mapStateToProps)(AllPost);