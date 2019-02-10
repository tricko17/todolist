import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText } 
from 'reactstrap';

class PostForm extends Component {

    state = {
        title:"",
        description:""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, description } = this.state
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
        this.setState({
            title: "",
            description: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Create Todo List</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            placeholder="Isi Title"
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input 
                            type="textarea" 
                            value={this.state.description}
                            name="description" 
                            rows="5"
                            onChange={(e) => this.setState({ description: e.target.value })}
                            placeholder="Isi Description"
                        />
                    </FormGroup>
                    <Button color="primary">Save</Button>
                </Form>
            </div>
        );
    }
}

export default connect()(PostForm);