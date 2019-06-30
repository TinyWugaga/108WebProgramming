import React from 'react';
import axios from 'axios';

import CustomerList from './customer-list.jsx'
import CustomerAdd from './customer-add.jsx'

export default class ReactApp extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {customers: []};
        this.Axios = axios.create({
            baseURL: "/customer",
            headers: {'content-type': 'application/json'}
        });
    }
 
    componentDidMount() {
        let _this = this;
        this.Axios.get('/')
          .then(function (response) {
             console.log(response);
            _this.setState({customers: response.data});
          })
          .catch(function (error) {
            console.log(error);
          });
    }
 
    render() {
        return (
                <div>
       <CustomerAdd/>
                  <CustomerList customers={this.state.customers}/>
                </div>
            )
    }
}