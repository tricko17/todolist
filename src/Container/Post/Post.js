import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.todo.title}</h2>
                <p>{this.props.todo.description}</p>
                <button
                    onClick={
                    ()=>this.props.dispatch({type:'DELETE_TODO',id:this.props.todo.id})
                    }>
                    Delete
                </button>
            </div>
        );
    }
}
export default connect()(Post);