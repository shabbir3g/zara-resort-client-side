import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Trash = <FontAwesomeIcon icon={faTrash} />;

const MyOrders = () => {
   
    const {user, isLoading} = useAuth();
    const email = user?.email;
    const [orders, setOrders] = useState();

    

    useEffect(() => {
        fetch(`https://frozen-beyond-51004.herokuapp.com/my-orders/${email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data) )

    }, []);

    if(isLoading){
            return  <div>
                    <div className="text-center"> 
                    <Spinner animation="border" variant="danger" />
                    </div>
                </div>
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
            <BreadcrumbBanner page="My Orders"></BreadcrumbBanner>
            
            <div className="container my-5"> 
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>Room Title</th>
                <th>Room Size</th>
                <th>Room Price</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>

            {
                orders?.map(order => <tr  key={order._id} >

                
                    
                <td>{order?.title}</td>
                <td>{order?.size}</td>
                <td>{order?.price}</td>
                <td className={ (order?.status == "Pending") ?  "text-center text-danger fw-bold" : "text-center text-success fw-bold" }>{order?.status}</td>
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

export default MyOrders;