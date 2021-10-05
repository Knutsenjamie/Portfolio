//solely for navigation/links to socials
import "./topbar.scss"
import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton} from '@material-ui/core';
import Menu from "@material-ui/icons/Menu";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function Topbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="topbar">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" style={{backgroundColor: "#00738b" }}>
                            <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                            <Menu
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            /> 
                            </IconButton>
                            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <a href="#aboutme">About Me</a>
                            </Typography> */}
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Hello!  I'm Jamie :) 
                            </Typography>
                            <IconButton 
                                color="inherit"
                                sx={{ml: 8}}
                            >
                                <LinkedInIcon/>
                            </IconButton>
                            <IconButton 
                                color="inherit"
                                sx={{ml: 8}}
                            >
                                <EmailIcon/>
                            </IconButton>
                            <IconButton 
                                color="inherit"
                                sx={{ml: 8}}
                            >
                                <GitHubIcon/>
                            </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Box>
            </div>
    );
}
