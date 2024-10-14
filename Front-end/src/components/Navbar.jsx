import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
//import backgroundImage from '/images/OIP.jpg'

 const Navbar = () => {
  return (
    <>
     {/* <div 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
       alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position:'relative'}}></div> 
<div> */}
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar> 
      <Toolbar style={{backgroundColor:'#7E60BF'}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography style={{fontFamily:"revert-layer"} } align='left' variant="h5" component="div" sx={{ flexGrow: 1 }}>
          CourseApp
        </Typography>
        <Link to={'/'}><Button style={{backgroundColor:"black",color:"white",marginLeft:"10px"}} >Home</Button></Link>
        <Link to={'/add'}><Button style={{backgroundColor:"black",color:"white",marginLeft:"10px"}}>Add</Button></Link>
        
      </Toolbar>
    </AppBar>
    <h2 style={{fontSize:'250%' ,color:'#624E88',backgroundColor:"#FFE1FF",fontFamily:"fantasy"}}>Embrace the journey of learning: Learn Anytime, Anywhere!</h2> 
  </Box>

  </>
  )
}
export default Navbar

      