import React from 'react';
import {Button,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import './styling.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link';
const NavBar = () => {
    const theme = useTheme();
    
    const mobile=useMediaQuery(theme.breakpoints.up('md'));
    
    const [click, setclick] = useState(false);
    const change=()=>{
      setclick(!click);
    }
    const hanmnaName={
      color:'#7b1fa2',
      fontFamily: [
        'Great Vibes',
        'cursive',
      ].join(','),
  
      "&:hover":{
        color:'black',
      }
    };
    const BtnStyle={
      textTransform:'capitalize',
        paddingTop:'5px',
        fontFamily: [
          'Montserrat',
          'sans-serif',
        ].join(','),
        color:'#9B9B9B',
        "&:hover":{
          backgroundColor:'transparent',
          color:'#483732',
        }
      };
      const resumeBtn={
        borderColor:'#7b1fa2',
        fontFamily: [
          'Playfair Display',
          'serif',
        ].join(','),
        backgroundColor:'F0EEED',
        color:'#7b1fa2',
        "&:hover":{
          backgroundColor:'#7b1fa2',
        color:'#F0EEED',
        }
      };
      const ToolMenu={
        backgroundColor: '#F0EEED',
        justifyContent:'space-between',
      };
     
  return (
    <BrowserRouter>
      <AppBar className='MainDiv' style={{boxShadow:'0px',backgroundColor:'transparent',}} elevation={0} position='sticky'>
      <Toolbar sx={ToolMenu}>
        <Box component="div" id='Home'>
          <Typography variant="h4" sx={hanmnaName}>Maham</Typography>
        </Box>
             
        <Box className={click?'boxRow':'boxNo'} textAlign='center'>
          <Link to='#' smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>Home</Button></Link>
          <Link to='#About' smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>About</Button></Link>
          <Link to='#wid' smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>What I do?</Button></Link>
          <Link to='#skills' smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>Skills</Button></Link>
          <Link to='#Experience' smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>Experience</Button></Link>
          <Link to='#Projects' smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>Projects</Button></Link>
          <Link to='#Portfolio'smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>Portfolio</Button></Link>
          <Link to='#Contact' smooth><Button variant='text' disableTouchRipple sx={BtnStyle}>Contact</Button></Link>
          <Link to='https://fiver.com/mahamafzaal910' smooth target='blank'><Button variant='outlined' disableTouchRipple sx={resumeBtn} className='res'>Hire Me</Button></Link>
      </Box>

        <Box component="div" className='menuBtn'>
          <Button sx={{color:'#1D2722',border:'1px solid #ACB4B0',borderRadius:'0.25rem',p:'0.25rem 0.75rem',}} onClick={change}><MenuIcon/></Button>
        </Box>
    </Toolbar>
    </AppBar>
    </BrowserRouter>
  )
}

export default NavBar