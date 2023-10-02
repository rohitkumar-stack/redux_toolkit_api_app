import React,{useEffect, useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';  
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useParams } from 'react-router-dom';
import axios from "axios";

 const Details = () => {
     const [data, setData] = useState([]);

// Start Get Data Userdeatills
     const {id} = useParams("");
     console.log(id);
 
     useEffect(() => {
           
          axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`, {
            
            })
            .then(function(response) {
                console.log("Recipients APIIIII", response.data);
                setData(response.data.photo);
                console.log(data, "=======>data")
            })
            .catch(function(error) {
              //   console.log(error);
              //   console.log(error.response);
            })
      }, [])
  
      console.log(data," nnkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
// End Get Data Userdeatills

  return (
    <>
  
      <div className="container mt-3">
           <h1 style={{fontWeight:400}}>Welcome to Mern Stack Developer</h1>

           <Card sx={{ maxWidth: 675 }}>
                <CardContent>
                <div className='add_btn'>
                     <button className="btn btn-primary pencil mx-2"><CreateIcon/></button>
                    <button className="btn btn-danger trash"><DeleteIcon/></button>
               </div>
                     <div className='row'>
                         <div className="left_view col-lg-6 col-md-6 col-12">
                              <img src={data.url} style={{ width: 200, height: 140 }} alt="wait..." />
                              <h3 className='mt-3'>Title: <span>{data.title}</span></h3>
                              <h3 className='mt-3'>Description:<span>{data.age}</span></h3>
                              <p className='mt-3'>{data.description}</p>
                             
                         </div>

                       

                     </div>
                     
                </CardContent>
           </Card>

      </div>
      
    </>
  )
}

export default Details;