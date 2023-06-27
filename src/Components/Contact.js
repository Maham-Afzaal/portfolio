import React from 'react';
import { Card,CardContent, Typography,CardHeader,Box,CardMedia, CardActionArea } from '@mui/material';
import Mail from '../Ui/Mail.png';
import Call from '../Ui/Call.png';
import LinkedIn from '../Ui/LinkedIn.png';
import Location from '../Ui/Location.png';
import {Paper} from '@mui/material';
const Contact = () => {
  return (
    <Box id='Contact' textAlign='center'sx={{borderbackgroundColor: '#fcfcfc',boxShadow: '0 0 10px #e0e0e0',p: '50px',}}>
        <Box>
            <Typography variant='h4'  className='PortFolioTypo' sx={{fontWeight: 'bold',borderBottom:'5px solid #673ab766',display:'inline-block',marginBottom: '70px',}}>Contact me 📱</Typography>
        </Box>
        <Box display='flex'  flexDirection={{xs:'column',sm:'column',md:'column',lg:'row',xl:'row',}}>
        {/* <Paper
            sx={{
                mr:{lg:'1rem',xl:'1rem'},
                flex:'1',
                '&:hover':{
            backgroundColor:'#b19ada',
            boxShadow: '0 0 10px #f5f5f5',
            borderRadius:'10px',
            cursor: 'pointer',  
            },p:'50px',
            mb:'20px',}}>
                <Box component='img' src={Call} width='64px' height='64px'></Box>
                <Typography variant='h6' sx={{fontWeight:'700',mb:'1rem'}}>Mail</Typography>
                <Typography variant='subtitle'>+1 (347) 265-1549</Typography>
            </Paper> */}

            
            
{/* 2nd  */}
<Paper component="a"
  href="https://www.linkedin.com/in/maham-a-8204b0210"
  target="_blank" sx={{textDecoration: 'none',
    mr:{lg:'1rem',xl:'1rem'},flex:'1','&:hover':{
            backgroundColor:'#b19ada',
            boxShadow: '0 0 10px #f5f5f5',
            borderRadius:'10px',
            cursor: 'pointer',
            
        },p:'50px',
        
        mb:'20px',}}>
                <Box component='img' src={LinkedIn} width='64px' height='64px'></Box>
                <Typography variant='h6' sx={{fontWeight:'700',mb:'1rem'}}>Linked In</Typography>
                <Typography variant='subtitle'>Maham Afzaal</Typography>

            </Paper>

            
            

{/* 3rd column */}
<Paper  component="a"
  href="mailto:mahamafzaal45@gmail.com"
  target="_blank" sx={{textDecoration: 'none',
    flex:'1',
mr:{lg:'1rem',xl:'1rem'},'&:hover':{
            backgroundColor:'#b19ada',
            boxShadow: '0 0 10px #f5f5f5',
            borderRadius:'10px',
            cursor: 'pointer',
            
        },p:'50px',
        mb:'20px',}}>
                <Box component='img' src={Mail} width='64px' height='64px'></Box>
                <Typography variant='h6' sx={{fontWeight:'700',mb:'1rem'}}>Email</Typography>
                <Typography variant='subtitle'>mahamafzaal@gmail.com</Typography>
            </Paper>
            
            
{/* 4rth */}
<Paper component="a"
  href="https://goo.gl/maps/RmRuNBgm9YZ7VPCh9"
  target="_blank" sx={{textDecoration: 'none',
    flex:'1','&:hover':{
            backgroundColor:'#b19ada',
            boxShadow: '0 0 10px #f5f5f5',
            borderRadius:'10px',
            cursor: 'pointer',
            
        },p:'50px',
        mb:'20px',}}>
                <Box component='img' src={Location} width='64px' height='64px'></Box>
                <Typography variant='h6' sx={{fontWeight:'700',mb:'1rem'}}>Location</Typography>
                <Typography variant='subtitle'>Pakistan</Typography>
            </Paper>
        </Box>

    </Box>
  )
}

export default Contact