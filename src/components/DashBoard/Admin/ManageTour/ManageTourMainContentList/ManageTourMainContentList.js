import React from 'react';
import { DeleteForever } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const ManageTourMainContentList = ({ tour }) => {
    const history = useHistory()

    const handleDelete = (id) => {
        fetch(`https://nameless-shelf-72210.herokuapp.com/deleteTour/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                alert('Tour deleted successfully');
                history.replace('/admin');
            })
    }
    return (

        <tr>
            <td>{tour._id}</td>
            <td>{tour.price}</td>
            <td>{tour.location}</td>
            <td>{tour.tourName}</td>
            <td><button onClick={() => handleDelete(tour._id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default ManageTourMainContentList;