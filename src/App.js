import React, { Component } from 'react';
import Store from './Store';
import { Provider } from 'react-redux';
import MainLayout from './Container/MainLayout';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <MainLayout/>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;