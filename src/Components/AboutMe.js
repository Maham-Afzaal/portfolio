import { Stack ,Typography} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import gL from '../gL.gif';
import { Divider } from '@mui/material';
import D1 from '../D1.png';
import D2 from '../D2.png';
import D3 from '../D3.png';
import './about.css';
const AboutMe = () => {
  return (
    <Box className='stackh' sx={{p:{xs:'100px 10px 50px 10px',sm:'100px 10px 50px 10px',md:'100px 50px 50px 50px',lg:'100px 50px 50px 50px'}}} id='About'>  

        <Box className='imgBox'>
          <img src={gL} className='img'
/>
        </Box>

        <Box className='AboutBox'>

          <Box>
            <h1 className='h1g'>About Me 👩</h1>
          <Typography variant='h6' sx={{mt:'30px',lineHeight: '1.2',color:'gray',}}>
          I am a Computer Science student who graduated from the esteemed IT University (KFUEIT) with a degree in CS. As a highly skilled professional engineer, I thrive on the challenges of problem-solving and actively seek out solutions. My passion lies in tackling complex problems and using my expertise to find innovative and effective resolutions. I am committed to pushing the boundaries of my knowledge and continuously growing as a skilled problem-solver.
          </Typography>
          <h3>Commmunities</h3>

          <Box>
            <img src={D1} className='imges'/>
            <img src={D2} className='imges'/>
            <img src={D3} className='imges'/>
          </Box>
          </Box>
        </Box>
        
    </Box>
  )
}

export default AboutMe