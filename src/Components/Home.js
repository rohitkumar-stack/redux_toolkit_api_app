import React, {useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../slices/photoSlice';

const Home =() =>{

const dispatch = useDispatch();
const data = useSelector((state) => state.photos.data);
const status = useSelector((state) => state.photos.status);

useEffect(() => {
  if (status === 'idle') {
    dispatch(fetchPhotos());
  }
    }, [status, dispatch]);

    if (status === 'loading') {
    return <div>Loading...</div>;
    }

    if (status === 'failed') {
    return <div>Error: </div>;
 }

    return(
        <>
        <div className="mt-5">
            <div className="container">
                <div className="add_button mt-2">
                    <NavLink to="/register" className="btn btn-primary mb-2">Add data</NavLink>
                </div>
                <table class="table">
                    <thead  class="table-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((element, index) =>{
                               
                                return (
                                    <>
                                    <tr>
                                        <td scope="row">{index + 1}</td>
                                        <td>{element.title}</td>
                                        <td>{element.description}</td>
                                        <td>
                                        <img src= {element.url} 
                                         style={{width:"70px", height:"70px"}}
                                          alt="Italian Trulli" />
                                           
                                        </td>
                                      
                                        <td className="d-flex justify-content-between">
                                            <NavLink to={`/view/${element.id}`} className="btn btn-success" ><RemoveRedEyeIcon /></NavLink>
                                            <NavLink to={`/edit/${element.id}`}  className="btn btn-primary pencil" ><CreateIcon/></NavLink>
                                            {/* <button className="btn btn-danger trash" onClick={()=>deleteuser(element._id)}  ><DeleteIcon/></button> */}
                                        </td>
                                    </tr>
                                    
                                    </>
                                )
                            })
                        }
                        
                        
                    
                    </tbody>
                </table>
            </div>

        </div>
        </>
    )
}

export default Home;