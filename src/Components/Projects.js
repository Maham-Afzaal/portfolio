import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ui9 from '../TechnoImages/ui9.png';
import ui10 from '../TechnoImages/ui10.png';
import ui11 from '../TechnoImages/ui11.png';
import ui12 from '../TechnoImages/ui12.jpg';
import Divider from '@mui/material/Divider';
import firebase from '../TechnoImages/firebase.svg';
import css from '../TechnoImages/css.svg';
import Tooltip from '@mui/material/Tooltip';
import html from '../TechnoImages/html.svg';
import next from '../TechnoImages/next.svg';
import tailwind from '../TechnoImages/tailwind.svg'
import javascript from '../TechnoImages/javascript.svg';
import react from '../TechnoImages/react.svg';
import mui from '../TechnoImages/mui.svg';
import {CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Bman from '../TechnoImages/Bman.png';
import petqo from '../TechnoImages/petqo.png'
import Energy from '../Ui/Energy.png';
import Imania from '../TechnoImages/Imania.png';
import AdminDashboard from '../TechnoImages/AdminDashboard.png';
import matteo from '../TechnoImages/matteo.png';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import event from '../TechnoImages/eventPlanning.png';
import cyber from '../TechnoImages/cyber.png';
const Projects = () => {
    return (
        <Box id='Projects' sx={{backgroundColor: '#fcfcfc',boxShadow: '0 0 10px #e0e0e0',p:{xs:'100px 10px 50px 10px',sm:'100px 20px 50px 20px',lg:'100px 50px 50px 50px',xl:'100px 50px 50px 50px'}}}>
        <Box>
          <Box sx={{display:'flex',justifyContent:'center'}}>
          <Typography variant='h4' sx={{fontWeight: 'bold',borderBottom:'5px solid #673ab766',display:'inline-block',marginBottom: '70px',}}>Projects 💻</Typography>
        </Box>
        </Box>
        <div>
            <Grid container spacing={2}>

                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/Imania" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height:{xs:'auto',sm:'170px'} }}>
                                <CardMedia
                                    component="img"
                                    image={Imania}
                                    title="Imania"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Imania
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Static and Responsive Site
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="Next.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={next} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                              
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Button component='a' href='https://imania.vercel.app' target='_blank' variant='contained'>Live Demo</Button>


                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/admin_dashboard" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height:{xs:'auto',sm:'170px'} }}>
                                <CardMedia
                                    component="img"
                                    image={AdminDashboard}
                                    title="Admin Dashboard"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Admin Dashboard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Your central hub for managing your application.
Take control and unleash your application's full potential.
Comprehensive administration at your fingertips.
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="React.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={react} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                              
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Button component='a' href='https://admin_dashboard.surge.sh' target='_blank' variant='contained'>Live Demo</Button>


                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/matteo_dal_maso" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height:{xs:'auto',sm:'170px'} }}>
                                <CardMedia
                                    component="img"
                                    image={matteo}
                                    title="Matteo Dal Masso"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Matteo Dal Masso
                                <MusicNoteIcon/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Matteo Dal Maso is an Italian symphonic and opera conductor. He is 1st prize winner of the 5th Athens International Conducting Competition and Audience.
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="Next.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={next} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                              
                                <Tooltip title="Tailwind Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={tailwind} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Button component='a' href='https://matteodalmaso.netlify.app' target='_blank' variant='contained'>Live Demo</Button>


                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* 2nd Card */}
                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/todo-list.git" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height: '170px' }}>
                                <CardMedia
                                    component="img"
                                    image={ui10}
                                    title="ToDo-List"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    To-Do List App
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A to-do list that helps individuals or teams keep track of tasks and activities they need to complete.
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="React" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={react} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Firebase" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={firebase} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>


                {/* 3rdcol */}
                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://chatapp-c816e.web.app/" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height: '170px' }}>
                                <CardMedia
                                    component="img"
                                    image={ui11}
                                    title="ChatApp"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Chat WebApp
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A Web App where enables Universal Communication among Individuals.
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="React" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={react} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Firebase" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={firebase} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/event_planning" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height:{xs:'auto',sm:'170px'} }}>
                                <CardMedia
                                    component="img"
                                    image={event}
                                    title="Event Planning 24"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Event Planning 24
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Static and Responsive Site
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="Next.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={next} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                              
                                <Tooltip title="Tailwind Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={tailwind} width={24} height={24} alt="Tailwind" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Button component='a' href='https://event-planning24.vercel.app' target='_blank' variant='contained'>Live Demo</Button>


                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* 4rth col */}
                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://petslover.pk/" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height: '170px' }}>
                                <CardMedia
                                    component="img"
                                    image={ui12}
                                    title="PetsLover"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PETSLOVER.PK
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    An marketplace connecting pet buyers and sellers worldwide, offering a wide range of pet breeds for sale.
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="Next.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={next} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Firebase" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={firebase} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="JavaScript" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={javascript} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://cyber-sumooz.vercel.app/" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height: '170px' }}>
                                <CardMedia
                                    component="img"
                                    image={cyber}
                                    title="Cyber Sumooz"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cyber Sumooz
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Cyber Sumooz is a character webpage. It contain information about Poo i.e hero of cyber sumooz and other characters.
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="Next.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={next} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Button component='a' href='https://cyber-sumooz.vercel.app/' target='_blank' variant='contained'>Live Demo</Button>

                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/energy-lb" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height: '170px', }}>
                                <CardMedia
                                    component="img"
                                    image={Energy}
                                    title="Energy"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lb Energy
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                               We provide the full spectrum of renewable energy concepts from a single source. As a leading full-service provider, we offer all services in-house.  
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="React.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={react} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                              
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Button component='a' href='https://energy-lb.vercel.app' target='_blank' variant='contained'>Live Demo</Button>


                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/bman" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height: '170px' }}>
                                <CardMedia
                                    component="img"
                                    image={Bman}
                                    title="bman"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    BMan WebPage
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A webpage that displays the serives of BMan providers.A client requested designed based web page.  
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="React.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={react} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Tailwind Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={tailwind} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/blog-site" target="_blank" sx={{textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0',maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height: '170px' }}>
                                <CardMedia
                                    component="img"
                                    image={ui9}
                                    title="Blog Post"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Next js Blog Post
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A blog post Static Site where any article, news piece, or guide that's published section of a website.
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="React" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={react} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Next.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={next} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item lg={4} md={6} sm={12}>
                    <Card component="a" href="https://github.com/Maham-Afzaal/petco" target="_blank" sx={{ textDecoration: 'none', boxShadow: '0 0 10px #e0e0e0', maxWidth: { xs: '100%', sm: '100%', md: '402px', lg: '402px', xl: '402px' }, mx: { sm: '4rem', md: '0%', lg: '0%' } }}>
                        <CardActionArea>
                            <Box sx={{ height:{xs:'auto',sm:'170px'} }}>
                                <CardMedia
                                    component="img"
                                    image={petqo}
                                    title="PetQo"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'fill',
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PetQo
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Pet Food Brand That Care for Your Pets
                                </Typography>
                            </CardContent>
                            <Divider sx={{ borderTopWidth: 4, borderTopColor: '#f1f1f1', margin: '13px 0' }} />

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: '0.7rem', mb: '0.7rem' }}>
                                <Tooltip title="React.Js" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px' }}>
                                        <img src={react} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>
                              
                                <Tooltip title="Css" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={css} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                                <Tooltip title="Mui" placement='top' arrow componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '0.8rem',
                                            backgroundColor: "black",
                                        }
                                    },
                                    arrow: {
                                        sx: {
                                            color: 'black',

                                        }
                                    }
                                }}>
                                    <Box sx={{ marginRight: 1, border: '1px solid black', borderRadius: '4px', }}>
                                        <img src={mui} width={24} height={24} alt="React" style={{ padding: '5px' }} />
                                    </Box>
                                </Tooltip>

                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </div>
        </Box>
    )
}

export default Projects