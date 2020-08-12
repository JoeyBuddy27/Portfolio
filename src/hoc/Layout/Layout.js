import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    render () {
        return (
            <React.Fragment>
                <Toolbar />
                <Container className={classes.Container} maxWidth="xl">
                <main className={classes.Content}>
                  <Typography className={classes.pageTitle} variant="h3" component="h3"> {this.props.pageTitle} </Typography>
                    {this.props.children}
                </main>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;