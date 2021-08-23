import React from 'react';

const UserOrderByEmailList = ({orders}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th> 
                <th className="text-secondary text-left" scope="col">Tour Name</th> 
                <th className="text-secondary" scope="col">Prize</th>               
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Address</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order , index )=>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.tourName}</td>
                        <td>{order.price}</td>
                        <td>{order.userName}</td>
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

export default UserOrderByEmailList;