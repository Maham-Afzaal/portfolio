// import React from 'react'
// import { Box ,Stack} from '@mui/system';
// import { Container, Typography } from '@mui/material';
// import Devicon from '../Devicon.jpg';
// import T from '../T.jpg';
// import './ListStyles.css';
// import Paper from '@mui/material/Paper';
// const Experience = () => {
//   return (
//     <Container maxWidth='xl' id='Experience' sx={{borderbackgroundColor: '#fcfcfc',boxShadow: '0 0 10px #e0e0e0',        py: { xs: "4rem", md: "5rem" },}} className='BoxExperi'>
//         <Box sx={{display:'flex',justifyContent:'center'}}>
//                 <Typography variant='h4' sx={{fontWeight: 'bold',borderBottom:'5px solid #673ab766',display:'inline-block',marginBottom: '70px',              fontVariant:'small-caps'}}>Experience 💼</Typography>
//             </Box>
//     <div direction={{sm:'row',lg:'column'}}>
//         <Box className='BoxStylingUL' sx={{gridTemplateColumns:{xs:'auto',sm:'auto auto',md:'auto auto',lg:'auto auto '},mx:{xs:'0.5rem',sm:'0.5rem',md:'0.7rem',lg:'1rem'},}} >
        
// {/* 1st column */}
//                 <Paper sx={{boxShadow: '0 0 10px #e0e0e0',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}, justifyContent:'space-between',p:{xs:'1rem',md:'2rem'},}} className='paperBox'>
//                 <Box sx={{m:{xs:'1rem',md:'2rem'},alignItems:'center',display: 'flex',flexDirection: 'column',justifyContent: 'center',}} className='nn'>
//                     <img src={Devicon} width='100px' height='100px' />
//                     <Typography variant='h5'fontWeight='700' fontSize='1.25rem'>Devicon</Typography>
//                     <Typography variant='h6' noWrap fontSize='small'>July 2021 - Nov 2021 </Typography>
//                     <br/>
//                 </Box>

//                 <Box>
//                     <Typography variant='h4' fontWeight='700' fontSize='1.25rem' sx={{lineHeight: '1.2',marginBottom: '0.5rem',marginTop: '0',}}>Front-End Developer</Typography>
//                     <Typography variant='body1' sx={{fontSize:'medium'}}>I have extensive experience working as a front-end developer at Devicon, specializing in React.js and Material-Ui(Mui). My primary responsibility was converting various designs into fully functional websites that met the specific requirements of our clients. </Typography>

//                     <Typography variant='h4' fontWeight='700' fontSize='1.25rem' sx={{lineHeight: '1.2',marginBottom: '0.5rem',marginTop: '0.5rem',}}>Responsibilities</Typography>
//                     <ul>
//                         <li>Suggesting the solution to the problems.</li>
//                         <li>Implementing the solutions.</li>
//                         <li>Making the required changes suggested by client.</li>
//                         <li>Testing code to identify and resolve any issues or bugs, making necessary modifications for optimal functionality.
// </li>
//                         </ul>
//                     </Box>
//                 </Paper>

// {/* 2nd column */}
//                 <Paper  className='paperBox' sx={{boxShadow: '0 0 10px #e0e0e0',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}, justifyContent:'space-between',p:'2rem',}}>

//                 <Box sx={{m:'2rem',alignItems:'center',display: 'flex',flexDirection: 'column',justifyContent: 'center',}} className='Ts'>
//                     <img src={T} width='100px' height='100px'/>
//                     <Typography variant='h5'fontWeight='700' fontSize='1.25rem'>NyroTech</Typography>
//                     <Typography variant='h6' noWrap fontSize='small'>Aug 2022- Sep 2022</Typography>
//                 </Box>

//                 <Box>
//                     <Typography variant='h4' fontWeight='700' fontSize='1.25rem' sx={{lineHeight: '1.2',marginBottom: '0.5rem',marginTop: '0',}}>React Developer</Typography>
//                     <Typography sx={{fontSize:'medium',}}>I worked with NyroTech as their React and NextJS Developer. I served as an intern, primarily focusing on frontend application development. Additionally, I provided effective solutions to address any challenges or issues encountered during the development process.</Typography>

//                     <Typography variant='h4' fontWeight='700' fontSize='1.25rem' sx={{lineHeight: '1.2',marginBottom: '0.5rem',marginTop: '0.5rem',}}>Responsibilities</Typography>
//                     <ul>
//                         <li>Writing clean and standard code.</li> 
//                         <li>Developing responsive websites that are optimized for
// various devices and screen sizes, providing an optimal
// user experience.</li>
//                         <li>Helping fellow colleagues with their problems.</li>
//                         <li>Fixing any problems in previously written code.</li>
                        
//                     </ul>
//                     </Box>


//         </Paper>
//         </Box>
//     </div>
//     </Container>
//   )
// }

// export default Experience
import React from 'react';
import { Box, Stack } from '@mui/system';
import { Container, Typography, Paper } from '@mui/material';
import Devicon from '../Devicon.jpg';
import T from '../T.jpg';
import './ListStyles.css';

const experienceData = [
  {
    company: 'Devicon',
    role: 'Front-End Developer',
    duration: 'July 2021 - Nov 2021',
    description: 'I have extensive experience working as a front-end developer at Devicon, specializing in React.js and Material-Ui(Mui). My primary responsibility was converting various designs into fully functional websites that met the specific requirements of our clients.',
    responsibilities: [
      'Suggesting the solution to the problems.',
      'Implementing the solutions.',
      'Making the required changes suggested by client.',
      'Testing code to identify and resolve any issues or bugs, making necessary modifications for optimal functionality.'
    ],
    image: Devicon
  },
  {
    company: 'NyroTech',
    role: 'React Developer',
    duration: 'Aug 2022- Sep 2022',
    description: 'I worked with NyroTech as their React and NextJS Developer. I served as an intern, primarily focusing on frontend application development. Additionally, I provided effective solutions to address any challenges or issues encountered during the development process.',
    responsibilities: [
      'Writing clean and standard code.',
      'Developing responsive websites that are optimized for various devices and screen sizes, providing an optimal user experience.',
      'Helping fellow colleagues with their problems.',
      'Fixing any problems in previously written code.'
    ],
    image: T
  }
];

const Experience = () => {
  return (
    <Container maxWidth='xl' id='Experience' sx={{ backgroundColor: '#fcfcfc', boxShadow: '0 0 10px #e0e0e0', py: { xs: '4rem', md: '5rem' } }} className='BoxExperi'>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', borderBottom: '5px solid #673ab766', display: 'inline-block', marginBottom: '70px', fontVariant: 'small-caps' }}>
          Experience 💼
        </Typography>
      </Box>
      <Box className='BoxStylingUL' sx={{ gridTemplateColumns: { xs: 'auto', sm: 'auto auto', md: 'auto auto', lg: 'auto auto' }, mx: { xs: '0.5rem', sm: '0.5rem', md: '0.7rem', lg: '1rem' } }}>
        {experienceData.map((exp, index) => (
          <Paper key={index} sx={{ boxShadow: '0 0 10px #e0e0e0', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', p: { xs: '1rem', md: '2rem' } }} className='paperBox'>
            <Box sx={{ m: { xs: '1rem', md: '2rem' }, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src={exp.image} width='100px' height='100px' alt={`${exp.company} logo`} />
              <Typography variant='h5' fontWeight='700' fontSize='1.25rem'>{exp.company}</Typography>
              <Typography variant='h6' noWrap fontSize='small'>{exp.duration}</Typography>
            </Box>
            <Box>
              <Typography variant='h4' fontWeight='700' fontSize='1.25rem' sx={{ lineHeight: '1.2', marginBottom: '0.5rem', marginTop: '0' }}>{exp.role}</Typography>
              <Typography variant='body1' sx={{ fontSize: 'medium' }}>{exp.description}</Typography>
              <Typography variant='h4' fontWeight='700' fontSize='1.25rem' sx={{ lineHeight: '1.2', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Responsibilities</Typography>
              <ul>
                {exp.responsibilities.map((res, resIndex) => (
                  <li key={resIndex}>{res}</li>
                ))}
              </ul>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Experience;
