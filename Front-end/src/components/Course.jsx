import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {  useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Course = () => {
  
    const [course,setCourse]=useState({
      courseName:'',
      courseId:'',
      courseCategory:'',
       courseDescription:'',
      courseFee:''
    })
    
  const fetchValue=(e)=>{
    setCourse({...course,[e.target.name]:e.target.value})
  }
  
  const location=useLocation()
  const navigate = useNavigate();
  let sendData=()=>{
if (location.state!=null){
  axios.put('http://localhost:3000/course/edit/'+location.state.course._id,course).then((res)=>{
alert('Data updated');
navigate('/')
  }).catch((error)=>{
    console.log(error);
  })
}
else{
  axios.post('http://localhost:3000/course/addcourse',course).then((res)=>{
    navigate('/')
  }).catch((error)=>{
    console.log(error)
  })
}

  }
  useEffect(()=>{
    if (location.state!=null){
      setCourse({...course,
        courseId:location.state.course.courseId,
        courseName:location.state.course.courseName,
        courseCategory:location.state.course.courseCategory,
        courseDescription:location.state.course.courseDescription,
        courseFee:location.state.course.courseFee,

      })
    }
  },[])
  
    return (<div>
      <h2 style={{backgroundColor:"#433878",color:"white",fontFamily:"fantasy"}}>Add Course</h2> 
      <Box
      
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
      {/* <h2>Add Movie</h2>  */}
        <TextField id="outlined-basic"
         label="courseName" 
         variant="outlined" 
         name='courseName'
         value={course.courseName}
         onChange={fetchValue} /><br />
  
        <TextField id="filled-basic" 
         label="courseId" 
         variant="outlined" 
         name='courseId'
        value={course.courseId}
         onChange={fetchValue}/><br />
  
        <TextField id="standard-basic"
          label="courseCategory" 
          variant="outlined" 
          name='courseCategory' 
          value={course.courseCategory}
          onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic"
         label="courseDescription" variant="outlined"  
         name='courseDescription'
         value={course.courseDescription}
         onChange={fetchValue}   /><br />
  
        <TextField id="outlined-basic" 
         label="courseFee"
         variant="outlined" 
         name='courseFee'  
         value={course.courseFee}
         onChange={fetchValue}  /><br />
  
        <Button style={{backgroundColor:"#FFE1FF",color:"#624E88",fontFamily:"monospace"}} variant="contained" onClick={sendData}>Submit</Button>
        
     
      </Box>
      </div>
    )
  }
  
  export default Course
