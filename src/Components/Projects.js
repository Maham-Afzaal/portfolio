import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ui9 from "../TechnoImages/blogSite.png";
import ui10 from "../TechnoImages/ui10.png";
import ui11 from "../TechnoImages/ui11.png";
import ui12 from "../TechnoImages/ui12.jpg";
import Divider from "@mui/material/Divider";
import firebase from "../TechnoImages/firebase.svg";
import css from "../TechnoImages/css.svg";
import Tooltip from "@mui/material/Tooltip";
import html from "../TechnoImages/html.svg";
import next from "../TechnoImages/next.svg";
import tailwind from "../TechnoImages/tailwind.svg";
import javascript from "../TechnoImages/javascript.svg";
import react from "../TechnoImages/react.svg";
import mui from "../TechnoImages/mui.svg";
import { CardActionArea, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Bman from "../TechnoImages/Bman.png";
import petqo from "../TechnoImages/petqo.png";
import Energy from "../Ui/Energy.png";
import Imania from "../TechnoImages/Imania.png";
import AdminDashboard from "../TechnoImages/AdminDashboard.png";
import matteo from "../TechnoImages/matteo.png";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import event from "../TechnoImages/eventPlanning.png";
import cyber from "../TechnoImages/cyber.png";
import masterCrm from "../TechnoImages/masterCrm.png";

const ToolTipIcon = ({ title, image }) => (
  <Tooltip
    title={title}
    placement="top"
    arrow
    componentsProps={{
      tooltip: {
        sx: {
          fontSize: "0.8rem",
          backgroundColor: "black",
        },
      },
      arrow: {
        sx: {
          color: "black",
        },
      },
    }}
  >
    <Box
      sx={{ marginRight: 1, border: "1px solid black", borderRadius: "4px" }}
    >
      <img
        src={image}
        width={24}
        height={24}
        alt={title}
        style={{ padding: "5px" }}
      />
    </Box>
  </Tooltip>
);
const projects = [
  {
    id: 1,
    title: "Imania",
    image: Imania,
    description: "Static and Responsive Site",
    link: "https://github.com/Maham-Afzaal/Imania",
    liveDemo: "https://imania.vercel.app",
    tools: [
      { title: "Next.Js", image: next },
      { title: "Css", image: css },
      { title: "Mui", image: mui },
    ],
  },
  {
    id: 2,
    title: "Admin Dashboard",
    image: AdminDashboard,
    description:
      "Your central hub for managing your application. Take control and unleash your application's full potential. Comprehensive administration at your fingertips.",
    link: "https://github.com/Maham-Afzaal/admin_dashboard",
    liveDemo: "https://admin_dashboard.surge.sh",
    tools: [
      { title: "React.Js", image: react },
      { title: "Css", image: css },
      { title: "Mui", image: mui },
    ],
  },
  {
    id: 3,
    title: "Matteo Dal Masso",
    image: matteo,
    description:
      "Matteo Dal Maso is an Italian symphonic and opera conductor. He is 1st prize winner of the 5th Athens International Conducting Competition and Audience.",
    link: "https://github.com/Maham-Afzaal/matteo_dal_maso",
    liveDemo: "https://matteodalmaso.netlify.app",
    tools: [
      { title: "Next.Js", image: next },
      { title: "Tailwind Css", image: tailwind },
      { title: "Mui", image: mui },
    ],
  },
  {
    id: 4,
    href: "https://github.com/Maham-Afzaal/event_planning",
    image: event,
    title: "Event Planning 24",
    description: "Static and Responsive Site",
    tools: [
      { title: "Next.Js", image: next },
      { title: "Tailwind Css", image: tailwind },
      { title: "Mui", image: mui },
    ],
    liveDemo: "https://event-planning24.vercel.app",
  },
  {
    id: 5,
    href: "https://github.com/Maham-Afzaal/blog-site",
    image: ui9,
    title: "Next js Blog Post",
    description:
      "A blog post Static Site where any article, news piece, or guide that's published section of a website.",
    tools: [
      { title: "React", image: react },
      { title: "Next.Js", image: next },
      { title: "Mui", image: mui },
      { title: "Css", image: css },
    ],
    liveDemo: "https://blog-site-seven-iota.vercel.app",
  },
  {
    id: 6,
    href: "https://cyber-sumooz.vercel.app/",
    image: cyber,
    title: "Cyber Sumooz",
    description:
      "Cyber Sumooz is a character webpage. It contain information about Poo i.e hero of cyber sumooz and other characters.",
    tools: [
      { title: "Next.Js", image: next },
      { title: "Mui", image: mui },
      { title: "Css", image: css },
    ],
    liveDemo: "https://cyber-sumooz.vercel.app/",
  },
  {
    id: 7,
    href: "https://github.com/Maham-Afzaal/energy-lb",
    image: Energy,
    title: "Lb Energy",
    description:
      "We provide the full spectrum of renewable energy concepts from a single source. As a leading full-service provider, we offer all services in-house.",
    tools: [
      { title: "React.Js", image: react },
      { title: "Css", image: css },
      { title: "Mui", image: mui },
    ],
    liveDemo: "https://energy-lb.vercel.app",
  },
  {
    title: "ToDo-List App",
    description:
      "A to-do list that helps individuals or teams keep track of tasks and activities they need to complete.",
    image: ui10,
    href: "https://github.com/Maham-Afzaal/todo-list.git",
    liveDemo: null, // Replace with actual link if available
    tools: [
      { title: "React", image: react },
      { title: "Firebase", image: firebase },
      { title: "Mui", image: mui },
      { title: "Css", image: css },
    ],
  },
  {
    title: "Chat WebApp",
    description:
      "A Web App that enables universal communication among individuals.",
    image: ui11,
    href: "https://chatapp-c816e.web.app/",
    liveDemo: "https://chatapp-c816e.web.app/", // Replace with actual link if available
    tools: [
      { title: "React", image: react },
      { title: "Firebase", image: firebase },
      { title: "Mui", image: mui },
      { title: "Css", image: css },
    ],
  },
  {
    id: 10,
    title: "Master Crm",
    description:
      "Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one CRM platform that grows with your business",
    image: masterCrm,
    link: "https://github.com/Maham-Afzaal/master_crm",
    liveDemo: "https://mastercrm.netlify.app/",
    tools: [
      { title: "React.Js", image: react },
      { title: "Css", image: css },
      { title: "Mui", image: mui },
    ],
  },
  {
    id: 11,
    title: "BMan WebPage",
    description:
      "A webpage that displays the services of BMan providers. A client requested designed-based web page.",
    image: Bman,
    link: "https://github.com/Maham-Afzaal/bman",
    tools: [
      { title: "React.Js", image: react },
      { title: "Tailwind Css", image: tailwind },
    ],
  },
  {
    id: 12,

    title: "PetQo",
    description: "Pet Food Brand That Care for Your Pets",
    image: petqo,
    link: "https://github.com/Maham-Afzaal/petco",
    tools: [
      { title: "React.Js", image: react },
      { title: "Css", image: css },
      { title: "Mui", image: mui },
    ],
  },

  {
    id: 13,

    title: "PETSLOVER.PK",
    description:
      "A marketplace connecting pet buyers and sellers worldwide, offering a wide range of pet breeds for sale.",
    image: ui12,
    link: "https://petslover.pk/",
    tools: [
      { title: "Next.Js", image: next },
      { title: "Firebase", image: firebase },
      { title: "Javascript", image: javascript },
      { title: "Css", image: css },
    ],
  },
];
const Projects = () => {
  return (
    <Box
      id="Projects"
      sx={{
        backgroundColor: "#fcfcfc",
        boxShadow: "0 0 10px #e0e0e0",
        py: { xs: "4rem", md: "5rem" },
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                borderBottom: "5px solid #673ab766",
                display: "inline-block",
                marginBottom: "70px",
                fontVariant: "small-caps",
              }}
            >
              Projects 💻
            </Typography>
          </Box>
        </Box>
        <div>
          <Grid container spacing={2}>
            {projects.map((proj, index) => (
              <Grid item lg={4} md={6} sm={12}>
                <Card
                  component="a"
                  href="https://github.com/Maham-Afzaal/Imania"
                  target="_blank"
                  sx={{
                    height:'100%',
                    textDecoration: "none",
                    boxShadow: "0 0 10px #e0e0e0",
                    maxWidth: {
                      xs: "100%",
                      sm: "100%",
                      md: "402px",
                      lg: "402px",
                      xl: "402px",
                    },
                    mx: { sm: "4rem", md: "0%", lg: "0%" },
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ height: { xs: "auto", sm: "170px" } }}>
                      <CardMedia
                        component="img"
                        image={proj.image}
                        title="Imania"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {proj.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {proj.description}
                      </Typography>
                    </CardContent>
                    <Divider
                      sx={{
                        borderTopWidth: 4,
                        borderTopColor: "#f1f1f1",
                        margin: "13px 0",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: "0.7rem",
                        mb: "0.7rem",
                      }}
                    >
                      {proj.tools.map((tool, index) => (
                        <ToolTipIcon
                          key={index}
                          title={tool.title}
                          image={tool.image}
                        />
                      ))}
                      {proj.liveDemo && (
                        <Button
                          component="a"
                          href={proj.liveDemo}
                          target="_blank"
                          variant="contained"
                        >
                          Live Demo
                        </Button>
                      )}
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default Projects;
