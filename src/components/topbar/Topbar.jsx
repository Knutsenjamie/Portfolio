import "./topbar.scss"
import * as React from 'react';
import { AppBar, Box, Link, Toolbar, Typography, IconButton} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="topbarWrapper">
                        <AppBar className='appBar' position="fixed" style={{backgroundColor: "#00738b" }}>
                            <Toolbar>
                            <div className='topbarLeft'>
                                <Typography variant="h6" component="div" >
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
                            </div>
                            <div className="topbarRight">
                                <div className="hammenu" onClick={()=>setMenuOpen(!menuOpen)}>
                                    <span className="topbarLines"></span>
                                    <span className="topbarLines"></span>
                                    <span className="topbarLines"></span>
                                </div>
                            </div>
                            </Toolbar>
                        </AppBar>
                    </div>
            </div>
    );
}
