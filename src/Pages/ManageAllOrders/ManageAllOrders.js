import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../hooks/useAuth';

const Trash = <FontAwesomeIcon icon={faTrash} />;

const ManageAllOrders = () => {
    const {isLoading} = useAuth();
    const [orders, setOrders] = useState();

    useEffect(() => {
        fetch(`https://frozen-beyond-51004.herokuapp.com/ManageAllOrders`)
        .then((res) => res.json())
        .then((data) => setOrders(data) )

    }, [orders]);

    if(isLoading){
        return  <div>
                <div className="text-center"> 
                <Spinner animation="border" variant="danger" />
                </div>
            </div>
    }

    const handleUpdate = (id) => {
        const url = `https://frozen-beyond-51004.herokuapp.com/udpate/${id}`;
        fetch(url, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated successfully');
            }
        })


    }

    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure, You want to delete');
        if(proceed){
            const url = `https://frozen-beyond-51004.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert("Deleted sucessfully");
                    const remainingUsers = orders.filter(user => user._id !==id);
                    setOrders(remainingUsers)
                }
            })
        }
    }

    return (
        <div>
            <BreadcrumbBanner page="Manage All Orders"></BreadcrumbBanner>
            <div className="container my-5"> 
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>User Name</th>
                <th>E-mail Address</th>
                <th>Room Title</th>
                <th>Room Size</th>
                <th>Room Price</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>

            {
                orders?.map((order, index) => <tr  key={order._id} >

                
                
                    <td>{order?.name}</td>
                    <td>{order?.email}</td>
                    <td>{order?.title}</td>
                    <td>{order?.size}</td>
                    <td>{order?.price}</td>
                    
                    <td className="text-center">
                        
                        <button onClick={() => handleUpdate(order?._id, order?.status)} className={ (order?.status == "Pending") ?  "btn btn-danger" : "btn btn-success" }>{order?.status}</button>
                    </td>
                    <td className="text-center"><button onClick={() => handleDeleteUser(order?._id)} className="btn btn-link text-danger">{Trash}</button></td>
                </tr>

                )
            }
                
               
               

            </tbody>
            </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;