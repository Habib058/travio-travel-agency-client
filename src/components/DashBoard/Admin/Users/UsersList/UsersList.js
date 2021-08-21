import React from 'react';
import './UsersList.css';
import { DataGrid } from '@material-ui/data-grid';
import img from '../../../../../assets/images/mypic.jpeg'
import { DeleteForever } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    {
        field: 'userName',
        headerName: 'User Name',
        width: 250,
        editable: true,
        renderCell: (params) => {
            return (
                <div className='userName'>
                    <img className='userImg' src={params.row.avatar} alt="" />
                    {params.row.userName}
                </div>
            )
        }
    },
    {
        field: 'email',
        headerName: 'User Email',
        width: 350,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: true,
    },
    {
        field: 'transaction',
        headerName: 'Transaction',
        width: 250,
        editable: true,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <Link > {/* to={`/users/`+params.row.id} */}
                    <button className="editButton">Edit</button></Link>
                    <DeleteForever className='deleteBtn' />
                   
                </>
            )
        }
    },
];

const rows = [
    {
        id: 1, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 2, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 3, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 4, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 5, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 6, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 7, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 8, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 9, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 10, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 11, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 12, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },
    {
        id: 13, userName: 'Jon Snow',
        avatar: img,
        email: 'johnsnow1234@gmail.com',
        status: 'active',
        transaction: '$200'
    },

];

const UsersList = () => {
    return (
        <div className='users'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default UsersList;