import React from 'react';
import "./sty.css";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Typewriter from 'typewriter-effect';
import './type.css';
import { Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Propic from '../ProPic.jpg'
const Homehamna = () => {
  return (
    <Box sx={{backgroundColor: '#fcfcfc',boxShadow: '0 0 10px #e0e0e0',p:{xs:'50px 10px 50px 10px',sm:'50px 10px 50px 10px',md:'50px 50px 50px 50px',lg:'50px 50px 50px 50px'}}}>
    <Box className='box1'>
        <Box className='boxImg'>
            <Avatar alt="Remy Sharp" src={Propic} sx={{ width:{xs:220,sm:280,md:280,lg:280}, height:{xs:220,sm:280,md:280,lg:280},border:'10px solid #9c27b0',ml:'10px' }} className='imgMaham'/>
        </Box>
   
        <Box className='typoBox'> 
            <Typography variant='h3' sx={{fontFamily: ['Montserrat','sans-serif',].join(','),fontSize:{xs:'2.4rem',sm:'2.5rem',md:'4rem',lg:'4rem'}}}>Hi, I'm Maham<span class="wave">👋</span></Typography>
            <Box sx={{display:'inline-block',}} component='span'>
            <Typography variant='h5' sx={{fontFamily: ['Montserrat','sans-serif',].join(','),lineHeight: '1.5',mb: '0.5rem',mt: '0',}}>I am A <span style={{display: 'inline-block'}}><Typewriter
                options={{
                  autoStart:true,
                  loop:true,
                  delay:40,
                  strings:[
                    'FrontEnd Developer Enthuasist',
                    'React Developer',
                    'Dedicated Programmer',
                    'Team Person',
                    'NextJS Developer',
                  ],
              }}
      /></span>
          </Typography></Box>
          <Box sx={{ alignItems: 'center',my:'1.5rem',}}>
          <Typography variant='h6' sx={{color:'gray',}}>
          As a passionate Front End Developer 🚀, I have a strong focus on cutting-edge Frontend technologies. With extensive experience in building robust Web applications, my skill set includes JavaScript, ReactJS, NextJs. I thrive on pushing the boundaries of user experiences and creating intuitive, visually appealing interfaces. Let's collaborate to bring your ideas to life!
          </Typography>
          </Box>
          <Box variant='div' display="flex" justifyContent="space-evenly" sx={{flexWrap:'wrap',gap: '10px 20px', alignItems: 'center',}} >
            <Button variant='contained'  component="a" href='https://github.com/Maham-Afzaal' target="_blank" sx={{bgcolor:'#673ab7',textTransform: 'none',borderBlockColor:'#673ab7',borderRadius: '0.3rem',fontSize: '1rem',p: '0.5rem 1rem',fontfamily: 'sans-serif',}} startIcon={<GitHubIcon/>}>
              View on GitHub
            </Button>
            <Button variant='contained' component="a" href="https://www.linkedin.com/in/maham-a-8204b0210" target="_blank" sx={{bgcolor:'#673ab7',textTransform: 'none',borderBlockColor:'#673ab7',borderRadius: '0.3rem',fontSize: '1rem',p: '0.5rem 1rem',}} startIcon={<LinkedInIcon/>}>
              View on LinkedIn
            </Button>

          </Box>
        </Box>
      </Box>
      </Box>
  )
}

export default Homehamna

