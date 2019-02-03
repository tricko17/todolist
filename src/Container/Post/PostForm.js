import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const description =  this.getDescription.value;
        const data = {
          id: new Date(),
          title,
          description,
          done: false
        }
        this.props.dispatch({
            type:'ADD_TODO',
            data
        });
        this.getTitle.value = '';
        this.getDescription.value = '';
    }

    render() {
        return (
            <div>
                <h1>Create Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        required type="text" 
                        ref={(input)=>this.getTitle = input} 
                        placeholder="Enter Todo Title"/>
                    <br /><br />
                    <textarea 
                        required rows="5" 
                        ref={(input)=>this.getDescription = input} cols="28" 
                        placeholder="Enter Todo Description" />
                    <br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);