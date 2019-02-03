import React, { Component } from 'react'
import { Button } from "reactstrap";
import axios from 'axios'

class App extends Component{
    constructor(){
        super()
        this.state = {
            nama: '',
            author: []
        };
    }

    componentDidMount(){
        axios.get('https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=5')
        .then((ambilData) => {
            this.setState({
                nama0: ambilData.data.posts[0].author.display_name,
                author: ambilData.data.posts
            })
            // console.log(ambilData.data.posts[0].author.display_name)
            // console.log(ambilData.data.posts[0].author.description)
            // console.log(ambilData.data.posts[0].author.registered_date)
        })
    }

    render(){
        const data = this.state.author.map((v,i) => {
            let detail = [v.author.display_name,v.author.registered_date].join(" ")
            return <li key={i}>{ detail }</li>
        })

        return(
            <div>
                <center>
                    <h1>Get Data</h1>
                    <ul>
                        {data}
                    </ul>
                </center>
                
            </div>
        )
    }

}

export default App;
