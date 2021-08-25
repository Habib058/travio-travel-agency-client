import React from 'react';
import { DeleteForever } from '@material-ui/icons';

const ManageTourMainContentList = ({tours}) => {

    const handleDelete = (e) => {
        fetch(`https://nameless-shelf-72210.herokuapp.com/deleteTour/${tours._id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert('Tour deleted successfully');
            // history.replace('/manageProducts');
        })
    }
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Tour Id</th> 
            <th className="text-secondary" scope="col">Prize</th>               
            <th className="text-secondary" scope="col">Location</th>               
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
              tours.map((tour, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{tour._id}</td>
                    <td>{tour.price}</td>
                    <td>{tour.location}</td>
                    <td>{tour.tourName}</td>
                    <td onClick={handleDelete}>{<DeleteForever style={{color:'red',cursor:'pointer'}}/>}</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default ManageTourMainContentList;