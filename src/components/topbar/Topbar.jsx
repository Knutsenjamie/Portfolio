import "./topbar.scss"
import * as React from 'react';
import { AppBar, Box, Link, Toolbar, Typography, IconButton} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="fixed" style={{backgroundColor: "#00738b" }}>
                            <Toolbar>
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
                                <Link href="https://www.linkedin.com/in/jamie-knutsen-001/" color="inherit">
                                    <LinkedInIcon/>
                                </Link>
                            </IconButton>
                            <IconButton 
                                color="inherit"
                                sx={{ml: 8}}
                            >
                            {/* <Link href="knutsenjamie@yahoo.com" color="inherit"> */}
                                <EmailIcon/>
                            {/* </Link> */}
                            </IconButton>
                            <IconButton 
                                color="inherit"
                                sx={{ml: 8}}
                            >
                            <Link href="https://github.com/Knutsenjamie" color="inherit">
                                <GitHubIcon/>
                            </Link>
                            </IconButton>
                            <div className="right">
                                <Typography variant="h6">
                                    menu
                                </Typography>
                            </div>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    </div>
            </div>
    );
}
