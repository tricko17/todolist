import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class Post extends Component {
    render() {
        return (
            <div className="App">
                <PostForm />
                <AllPost />
            </div>
        );
    }
}
export default Post;