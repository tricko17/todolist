import React, { Component } from 'react';
import Header from './Header';
import Post from '../Post';
import CompleteTodo from '../CompleteTodo';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

class MainLayout extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Container>
                    <Route path="/" component={""}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/complete" component={CompleteTodo}/>
                </Container>
            </div>
        )
    }
}
export default MainLayout;