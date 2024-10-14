import React, { useEffect, useState } from 'react'
import {Button,Card,CardActions,CardContent,CardMedia,Grid2,Typography} from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//  const [rows,setRows]=useState[{
  const Home = () => {
const [rows,setRows]=useState([]);
//connecting external Api
useEffect(()=>{
 axios.get('http://localhost:3000/course').then((res)=>{

    setRows(res.data);
  })

 })

    let deleteCourse=(p)=>{
      axios.delete('http://localhost:3000/course/remove/'+p).then((res)=>{
        alert('deleted');
        window.location.reload();
      })
    }

    const navigate=useNavigate()
    function updateCourse(course){
      navigate('/add',{state:{course}})
    }
    

    
    
//  const rows=[{

      
//         CourseName:"FSD in MERN",
//         image:"https://i.pinimg.com/736x/45/53/86/455386f21c9a82ccb91ec78dacd9d8a9.jpg",
//         CourseId:1034,
//         CourseCategorry:"Upskilling",
//          CourseDescription:"MERN Stack is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js",
//           CourseFee:20000
//      },
//     {
// CourseName:"DSA",
//         image:"https://th.bing.com/th/id/OIP.qEfnMzJxiJiq2dw4yu08vgHaE6?w=750&h=498&rs=1&pid=ImgDetMain",
//         CourseId:101,
//         CourseCategorry:"SMP",
//         CourseDescription:"This course presents you with a gentle introduction to Data Analysis, the role of a Data Analyst, and the tools used in this job. ",
//         CourseFee:20000
//     },
//     {
//       CourseName:"CSA",
//         image:"https://www.ballisticdomains.com/wp-content/uploads/2020/03/iStock-1173729262_cropped.png",
//         CourseId:1034,
//         CourseCategorry:"IRP",
//          CourseDescription:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or disrupting normal business processes.",
//         CourseFee:20000
//     },
//     {
//       CourseName:"Python",
//         image:"https://www.bing.com/images/search?view=detailV2&ccid=CtCMt%2bG2&id=5A821F9DF2BA4C21E2ABBFD5660E33ABCBB3A03A&thid=OIP.CtCMt-G2g-Ei7aULM212wgHaEP&mediaurl=https%3a%2f%2ffossbytes.com%2fwp-content%2fuploads%2f2019%2f07%2fpython-programming-language-courses.jpg&exph=688&expw=1200&q=python+course&simid=608015087642684769&FORM=IRPRST&ck=0DA8D9DA7664218A1E1C431A83814A78&selectedIndex=65&itb=0",
//         CourseId:105,
//         CourseCategorry:"Upskilling",
//         CourseDescription:"Python is one of the most popular programming languages today, known for its simplicity and ease of use. Whether you’re just starting with coding or looking to pick up another language, Python is an excellent choice. Its clean and straightforward syntax makes it beginner-friendly, while its powerful libraries and frameworks are perfect for advanced projects. ",
//         CourseFee:20000
//     },
// //     {
// //       CourseName:"Digital Marketing",
// //         image:"https://th.bing.com/th/id/R.5298291dcf99cd72c9444a2d4699e30b?rik=Rr5OUXVDuUEdmw&riu=http%3a%2f%2flite16.com%2fblog%2fwp-content%2fuploads%2f2021%2f07%2fdigital-marketing-4111002_1920-min.jpg&ehk=5LWIMswahzq2Y1E2HktnQEmylq%2fyx7qMdFWdRdjC3jY%3d&risl=&pid=ImgRaw&r=0",
// //         CourseId:101,
// //         CourseCategorry:"IRP",
// //         CourseDescription:"Digital marketing is one of the most popular and powerful ways to generate awareness, interest and sales for your products or services. As the name implies, digital marketing is conducted via digital avenues, including social media, websites, search engines, email and text messaging. ",
// //         CourseFee:20000
// //     }, {
// //       CourseName:"Medical Coding",
// //         image:"https://i.ytimg.com/vi/wScM-yWab5s/maxresdefault.jpg",
// //         CourseId:101,
// //         CourseCategorry:"SMP",
// //         CourseDescription:"Clinical coding is the process of converting vital medical information into standard alphanumeric codes to accurately document medical records and bill patients. This course covers the basics of clinical coding. You'll learn about clinical records types, the key roles of clinical coding, factors that cause coding errors and more. You'll get a thorough understanding of ICD-10 coding, its concepts and its importance in health care",
// //         CourseFee:20000
// //     }
//  ]
    // const [rows,setRows]=useState([]);


      return (
        
        <Grid2 container spacing={4}>
           {/* <h2>Unlock Your Future: Learn Anytime, Anywhere!</h2>  */}
        {rows.map((row) => (
          <Grid2  xs={12} sm={6} md={4} 
          //key={row.courseId}
          >
            <Card style={{border:"2px solid black",backgroundColor:"#FFE1FF"}} sx={{display:'flex',flexDirection:'column',height:'100%',width:400,marginTop:'6%', borderRadius:1, boxShadow:'0 0 10px rgba(0,0,0,0,0.2)','&:hover':{boxShadow:'0 0 10px rgba(0,0,0,0.5'}}}>
              <CardMedia 
              component="img"
                 image={row.image}
                
                sx={{height:250}}
                // image={row.image}  {/* External image URL */}
               
              />
              <CardContent sx={{flex:'10 auto'}}>
                <Typography style={{backgroundColor:"#81DAE3",fontFamily:"monospace"}} gutterBottom variant="h5" component="div">
                  {row.courseName}
                </Typography>
                 <Typography variant="body2" color="text.secondary">
                  <b>Course Id: </b>{row.courseId} 
                   </Typography> 
                  <Typography variant="body2" color="text.secondary">
                  {row.courseCategory}
                  
                </Typography>
                <Typography style={{fontFamily:"revert",color:'black'}} variant="body2" color="text.secondary">
                  {row.courseDescription}
                  
                </Typography> 
                 <Typography variant="body2" color="text.secondary">
                    <b>Course Fee: </b> {row.courseFee} 
                 </Typography> <br/>
                 <Typography> <Button onClick={()=>{updateCourse(row)}} color="secondary"> UPDATE </Button>  </Typography><br/>
                 <Typography><Button onClick={()=>{deleteCourse(row._id)}} variant="outlined" color="error">DELETE</Button></Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

  )

}

export default Home
