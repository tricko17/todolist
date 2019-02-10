import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
    Card, 
    CardText, CardBody,
    CardTitle,Button } 
from 'reactstrap';

class Post extends Component {
    
    state = {
        todo: this.props.todo
    }

    completeTodo = (todo) => {
        todo.done = true
        this.props.dispatch({type:'UPDATE_TODO',todo})
    }
    
    renderButton = () => {
        if (!this.state.todo.done){
            return (
                <div>
                    <Button 
                        color="success" 
                        onClick={() => this.completeTodo(this.state.todo)}>
                        Complete</Button> 
                        {" "}
                    <Button 
                        color="danger"
                        onClick={
                            ()=>this.props.dispatch({type:'DELETE_TODO',id:this.state.todo.id})
                        }
                    >Delete</Button>
                </div>
            )
        }
        else{
           return null
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.todo.title}</CardTitle>
                        <CardText>{this.state.todo.description}</CardText>
                        {
                            this.renderButton()
                        }             
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default connect()(Post);