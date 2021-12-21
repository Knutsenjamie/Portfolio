import "./topbar.scss"
import * as React from 'react';
import { AppBar, Box, Link, Toolbar, Typography, IconButton} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="fixed" style={{backgroundColor: "#00738b" }}>
                            <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Hello,  I'm Jamie!
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
                            <Link href="https://github.com/Knutsenjamie" color="inherit">
                                <GitHubIcon/>
                            </Link>
                            </IconButton>
                            {/* <IconButton 
                                color="inherit"
                                sx={{
                                    ml: 8
                                }}
                            >
                                <EmailIcon/>
                                <Typography>
                                    knutsenjamie@yahoo.com
                                </Typography>
                            </IconButton> */}
                            <div className="right">
                                <div className="hammenu" onClick={()=>setMenuOpen(!menuOpen)}>
                                    <span className="line1"></span>
                                    <span className="line2"></span>
                                    <span className="line3"></span>
                                </div>
                            </div>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    </div>
            </div>
    );
}
