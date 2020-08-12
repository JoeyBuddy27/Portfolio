 import React from 'react';
 import classes from './Footer.module.css';
 import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';


const footer = props => (
 <div className={classes.Footer}>
               &copy; Copyright Joe O'Brien 2020 
                <p> Website build with <a href="https://reactjs.org/" target="blank"> REACT JS </a> </p>
                <a className={classes.Social} href="https://www.linkedin.com/in/joedigitalmedia/" rel="noopener noreferrer" target="blank"><LinkedInIcon fontSize="large"/></a>
    	<a className={classes.Social} rel="noopener noreferrer" href="#" target="blank"><FacebookIcon fontSize="large"/></a>
        <a className={classes.Social} rel="noopener noreferrer" href="mailto:joedigitalmedia@gmail.com" target="blank"><EmailIcon fontSize="large" /></a>
                 </div>
                 );

export default footer;