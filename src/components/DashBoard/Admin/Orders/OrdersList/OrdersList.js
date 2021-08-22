import React from 'react';

const OrdersList = ({orders}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Tour Id</th> 
                <th className="text-secondary" scope="col">Prize</th>               
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Address</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.id}</td>
                        <td>{order.price}</td>
                        <td>{order.userName}</td>
                        <td>{order.userEmail}</td>
                        <td>{order.userAddress}</td>
                        <td>{order.userPhone}</td>
                        <td>null</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrdersList;