import { Box, Paper, Typography } from '@material-ui/core';
import colors from '../../Themes/Light Theme/styles';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <Paper className="footer-container" elevation={0} square style={{ background: colors.lila}}>
            <Box className="content-box">
                <Typography>
                    Copyright @ {new Date().getFullYear()} TeamIng. All Rights Reserved.
                </Typography>
            </Box>
        </Paper>
    )
}

export default Footer
