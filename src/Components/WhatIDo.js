import React from 'react';
import './BoxStyling.css';
import { Box , Typography,Paper} from '@mui/material'
const WhatIDo = () => {
  return (
    <div>
        <Box id='wid'sx={{backgroundColor: '#fcfcfc',boxShadow: '0 0 10px #e0e0e0',p:{xs:'40px 10px 50px 10px',sm:'100px 10px 50px 10px',md:'100px 50px 50px 50px',lg:'100px 50px 50px 50px'}}}>
            <Box>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <Typography variant='h4'sx={{fontWeight: 'bold',borderBottom:'5px solid #673ab766',marginBottom: {xs:'30px',sm:'60px',lg:'70px',xl:'70px'}}}>
                    What I Do? 👩‍💻
                </Typography></Box>
                <Box className='BoxStyling' sx={{gridTemplateColumns:{xs:'auto',sm:'auto auto',md:'auto auto',lg:'auto auto auto'},}}> 

                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>
                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',alignContent:'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography variant='p'>Actively listen to customer's requests, confirming full understanding before addressing concerns</Typography>
                        </Box>
                    </Paper>


                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>
                        <Box display='flex' flexDirection='row' sx={{alignItems:'center',}}>

                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                            <Typography variant='p'>Identify issues, analyzed information and provided solutions to problems</Typography>
                        </Box>
                    </Paper>

                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography>Figma,Adobe,PSD or any format to be converted into Website.</Typography>
                        </Box>
                    </Paper>
                    
                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>
                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography>Convert graphic designs to usable web images using ReactJS/NextJs</Typography>
                        </Box>
                    </Paper>


                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>
                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography variant='p'>Provide front-end website development using ReactJs/NextJs using Material-UI, Tailwind CSS, Saas.</Typography>
                        </Box>
                    </Paper>

                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>
                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography variant='p'>Establish presentation consistency(Cross browser compatibility) across Chrome, Safari, Firefox and other common browser interfaces</Typography>
                        </Box>
                    </Paper>


                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>
                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography variant='p'>Multi-task across multiple functions and roles to generate project results and meet deadlines and organizational expectations</Typography>
                        </Box>
                    </Paper>

                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>
                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography variant='p'>Code websites using HTML, CSS, JavaScript languages</Typography>
                        </Box>
                    </Paper>

                    
                    <Paper sx={{padding: '5px 15px',borderRadius:'16px',boxShadow: '0 0 10px #e0e0e0','&:hover':{backgroundColor:'#6f42c1',color:'white',}}}>                        <Box display='flex' flexDirection='row' sx={{alignItems: 'center',}}>
                            <Box component='span' sx={{marginLeft:'10px',marginRight:'20px',}}>✔</Box>
                                <Typography>Replicating any website to meet your specific requirements.</Typography>
                        </Box>
                    </Paper>


                    

                    

                </Box>


            </Box>



        </Box>

    </div>
  )
}

export default WhatIDo