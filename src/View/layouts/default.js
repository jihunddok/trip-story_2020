import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeadAppBar from './App-bar';
import SideNavBar from './SideNavBar'


function Default() {
    return (
        <React.Fragment>
            <CssBaseline />

            <SideNavBar />
         
        </React.Fragment>
        
    );
}
export default Default;