import React from 'react';
import Customer from './customer.jsx'
 
export default class CustomerList extends React.Component{
     
    render() {
        var customer = this.props.customers.map((customer, i) =>
            <Customer key={i} customer={customer}/>
        );
         
        return (
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>address</th>
						<th>weight</th>
                    </tr>
                    {customer}
                </tbody>
            </table>
        )
    }
}