import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import List from './List';
class CompleteTodo extends Component {
    render() {
        return (
            <Row>
                <Col xs="12" sm="12" md="12" lg="12">
                    <List/>
                </Col>
            </Row>
        );
    }
}
export default CompleteTodo;