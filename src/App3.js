import React, {Component} from 'react';
import { Table, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

class App extends Component{
    constructor(){
        super()
        this.state = {
            dataKu: [],
            detail: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
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

    detailData = (v) => {
        this.setState({
            detail: [v]
        })
    }

    deleteData = () => {
        this.setState({
            detail: []
        })
    }
    render(){
        let data = this.state.dataKu.map((v,i) => {
            let id = v.id;
            let name = v.name;
            let email = v.email;
            let alamat = [
                v.address.suite,
                v.address.street,
                v.address.city
            ].join(", ")
            return <tr scope="row" key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{alamat}</td>
                <td>
                    <Button onClick={() => this.detailData(v) } color="primary">Detail</Button>
                    <Button onClick={() => this.deleteData() } color="danger">Delete</Button>
                </td>
            </tr>
        })

        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md={{ size: 6, offset: 4 }}>
                        <h1>Daftar User</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="8">
                        <Table striped hover>
                            <thead>
                                <tr scope="row">
                                    <th>ID</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>Alamat</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data}
                            </tbody>
                        </Table>
                    </Col>
                    <Col md="4">
                        {
                            (this.state.detail.length > 0) ?
                                this.state.detail.map((v,i) => {
                                    let alamat = [
                                        v.address.suite,
                                        v.address.street,
                                        v.address.city
                                    ].join(", ")

                                    return (
                                        <ListGroup key={i}>
                                            <ListGroupItem>{v.id}</ListGroupItem>
                                            <ListGroupItem>{v.name}</ListGroupItem>
                                            <ListGroupItem>{alamat}</ListGroupItem>
                                        </ListGroup>
                                    )
                                })
                            :   <h1>Please Select User</h1>
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App