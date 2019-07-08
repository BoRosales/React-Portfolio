import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class Header extends React.Component {
render() {
    return (
        <div>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" color="secondary">
                        Bo Rosales
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}