//solely for navigation/links to socials
import "./topbar.scss"
import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton} from '@material-ui/core';
import Menu from "@material-ui/icons/Menu";



export default function Topbar() {
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
                    <Menu/> 
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hello!  I'm Jamie :) 
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
