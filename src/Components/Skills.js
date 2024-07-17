import React from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/material/Box';
import firebase from '../TechnoImages/firebase.svg';
import javascript from '../TechnoImages/javascript.svg';
import html from '../TechnoImages/html.svg';
import css from '../TechnoImages/css.svg';
import sql from '../TechnoImages/sql.svg';
import react from '../TechnoImages/react.svg';
import scss from '../TechnoImages/scss.svg';
import mui from '../TechnoImages/mui.svg';
import redux from '../TechnoImages/redux.svg';
import bootstrap from '../TechnoImages/bootstrap.svg';
import tailwind from '../TechnoImages/tailwind.svg';
import git from '../TechnoImages/git.svg';
import { Tooltip } from '@mui/material';
import next from '../TechnoImages/next.svg';
import './skills.css'

const Skills = () => {

    
  return (
    <Box id='skills'textAlign='center'sx={{borderbackgroundColor: '#fcfcfc',boxShadow: '0 0 10px #e0e0e0',p:'100px 0px 50px 0px'}} >
    <Box textAlign='center'>
          <Typography variant='h4'sx={{fontWeight: 'bold',borderBottom:'5px solid #673ab766',display:'inline-block',marginBottom: '70px',fontVariant:'small-caps'}}>Skills 🔥</Typography>
        </Box>
    <Box display='flex' justifyContent='center' alignContent='center' flexWrap='wrap' gap='1rem' className='skillBox' sx={{margin:2}}>

    <Box>
    <Tooltip title='React' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>
        <CircularProgress color='info' size='lg' value={85} determinate sx={{ '--CircularProgress-size': '120px', }}>
            <img src={react} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='Javascript' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={80} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={javascript} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='React Redux' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={67} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={redux} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='Scss' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={67} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={scss} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='Material-Ui' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={88} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={mui} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='NextJs' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={67} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={next} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='Tailwind Css' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={90} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={tailwind} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>
    <Box>
    <Tooltip title='Html' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={90} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={html} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='Css' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={90} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={css} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    <Box>
    <Tooltip title='Firebase' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={67} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={firebase} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>
    <Box>
    <Tooltip title='Bootstrap' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={67} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={bootstrap} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>
    <Box>
    <Tooltip title='Git' arrow placement="top" componentsProps={{
            tooltip: {
              sx: {
                fontSize:'1rem',
                backgroundColor: "black",
              }
            },
            arrow:{
                sx:{
                    color:'black',

                }
            }
          }}>

        <CircularProgress color='info' size='lg' value={67} determinate sx={{ '--CircularProgress-size': '120px' }}>
            <img src={git} width={80} height={80}/>
      </CircularProgress>
      </Tooltip>
    </Box>

    

  </Box>
  </Box>
  )
}

export default Skills