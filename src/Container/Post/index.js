import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import { Row, Col } from 'reactstrap';
class Post extends Component {
    render() {
        return (
            <Row>
                <Col xs="12" sm="12" md="4" lg="4">
                    <PostForm />
                </Col>
                <Col xs="12" sm="12" md="8" lg="8">
                    <AllPost />
                </Col>
            </Row>
        );
    }
}
export default Post;