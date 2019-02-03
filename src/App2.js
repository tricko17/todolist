import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

class App extends Component{

    constructor(){
        super()
        this.state = {
            dataKu: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response)
                this.setState({
                    dataKu: response.data
                })
            })
            .catch((err) => {
                console.log('err')
            })
    }

    render(){
        // Menggunakan Component ListGroup reactstrap
        const data = this.state.dataKu.map((v,i) => {
            let detail = [v.id,v.title].join(" ")
            return <ListGroupItem key={i}> {detail} </ListGroupItem>
        })

        return (
            <div>
                <h1>Coba Get Data</h1>
                <ListGroup>
                    { data }
                </ListGroup>
            </div>
        )
    }
}

export default App