import React, { Component } from 'react';
import Store from './Store';
import { Provider } from 'react-redux';
import Post from './Container/Post';

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Post/>
            </Provider>
        );
    }
}
export default App;