import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Bio.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import Profile from "../../assets/meProfo.jpg";

const bio = (props) => (
    <React.Fragment>
        <Grid container>
            <Grid item sm={6} lg={8} xl={8}>
                <a
                    className={classes.Social}
                    href="https://www.linkedin.com/in/joedigitalmedia/"
                    rel="noopener noreferrer"
                    target="blank"
                >
                    <LinkedInIcon fontSize="large" />
                </a>
                <a
                    className={classes.Social}
                    rel="noopener noreferrer"
                    href="#"
                    target="blank"
                >
                    <FacebookIcon fontSize="large" />
                </a>
                <a
                    className={classes.Social}
                    rel="noopener noreferrer"
                    href="mailto:joedigitalmedia@gmail.com"
                    target="blank"
                >
                    <EmailIcon fontSize="large" />
                </a>
                <p>
                    Hey! I’m Joe - an Irish-born, but now London-based digital
                    media and cinema professional. I have a 1st class honours
                    M.Sc. in{" "}
                    <a
                        href="http://www.csis.ul.ie/currentcourse/LM345/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Interactive Media
                    </a>{" "}
                    for which I received a scholarship to undertake in 2015.
                </p>
                <p>
                    I also have a 1.1 B.Sc. in 
                    <a
                        title="DMD"
                        href="http://www.csis.ul.ie/course/LM113"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Digital Media Design
                    </a>
                     from University of Limerick, where I graduated in 2014.
                    This programme comprised of a number of interdisciplinary
                    subjects, including interaction design, audio/video
                    production, programming, research methods and product
                    design.
                </p>
                <p>
                    After my studies I set up my own freelance design team with
                    a classmate from UL. We worked on a number of design
                    projects for clients, which can be found on the website I
                    created:{" "}
                    <a
                        href="http://redcastledesign.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        redcastledesign.com
                    </a>
                </p>
                <p>
                    After going our seperate ways, I continued to work freelance
                    on a number of other Wordpress and graphic design projects.{" "}
                </p>
                <p>
                    During lockdown I have took it upon myself to learn REACT
                    JS, and have recently completed a thorough{" "}
                    <a
                        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        course{" "}
                    </a>{" "}
                    on the subject. I have since been working on JavaScript and
                    REACT projects, including this very website, and would be
                    keen to pursue this as a career if the opportunity arises.{" "}
                </p>
                <p>
                    I have 5 years experience in the Cinema Industry, starting
                    from cinema host, working my way up through Cinema
                    Experience Manager to Film Booker. It is an industry I am
                    incredibly passionate about. Although the affects of
                    COVID-19 on cinemas means I may have to look elsewhere to
                    restart my career.
                </p>
                <p>
                    In my free time, my heart primarily lies with film and
                    football. I have completed a TV Production, directing and
                    Presenting course at The Park Studio in Dublin
                    which provided me with hands on know-how in the world of
                    live television.{" "}
                </p>
                <p>
                    I’m also interested in writing (pop culture mostly!) and am
                    a self taught guitarist and bassist.{" "}
                </p>
                <p>
                    I’m always eager to work, gain experience and take part in
                    projects in anything media-based or film-related, so don’t
                    hesitate to
                    <a
                        href="mailto:joedigitalmedia@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {" "}
                        contact me
                    </a>
                    .
                </p>
            </Grid>
            <Grid item sm={6} lg={4} xl={4}>
                <img
                    className={classes.profilePic}
                    src={Profile}
                    alt="Profile pic"
                />
            </Grid>
        </Grid>
    </React.Fragment>
);

export default bio;
