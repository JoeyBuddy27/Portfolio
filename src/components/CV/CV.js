import React from 'react';
import Grid from '@material-ui/core/Grid';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import CVSection from './CVSection.js';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BuildIcon from '@material-ui/icons/Build';
import LinearProgress from '@material-ui/core/LinearProgress';

  const CV = props => {

    const cvArray = 
    [
     {
    "skill": "",
    "role": "joegitalmedia@gmail.com",
    "location": "142 Norbury Avenue, Watford",
    "icon": "contact",
    "date": "UK: 07828716124",
    "date2": "IRE: 00353867211919",
  },
  {
    "skill": ["Cinema/Film Booking", 100, "HTML/CSS/Wordpress", 90, "Adobe Photoshop", 70, "JavaScript/REACT", 70],
    "icon": "skills"
  },
  {
     "skill": "",
    "location": "ODEON CINEMAS",
    "role": "Film Booker",
    "icon": "professional",
    "header": "PROFESSIONAL EXPERIENCE",
    "date": "Aug 2019 - July 2020",
    "desc": "Devising bespoke lineups for 11 cinemas in UK/Ireland to maximise revenue. \n\n Negotiating with film distributors and cinema management. \n\n Data analysis on box office performance. ",
  } ,
   {
     "skill": "",
    "location": "University of Limerick",
    "role": "Masters in Interactive Media",
    "icon": "school",
    "date": "Sept 2014 - Sept 2015",
    "desc": "Awarded 1.1 honours \n\n Dissertation: Interactive Data Visualization of Irish Road Deaths",
  } ,
   {
     "skill": "",
    "location": "ODEON CINEMAS",
    "role": "Guest Experience Supervisor",
    "icon": "professional",
    "date": "Mar 2017 - Aug 2019",
    "desc": "Running operations on shift. \n\n Dealing with guest complaints, managing large team. \n\n Admin duties, including digital projection, stock ordering, rostering",
  },
   {
     "skill": "",
    "location": "University of Limerick",
    "role": "Bsc Digital Media Design",
    "icon": "school",
    "date": "Dec 2015 - Present",
    "desc": "Awarded 1.1 honours",
  },
  {
     "skill": "",
    "location": "FREELANCE",
    "role": "Web Designer",
    "icon": "professional",
    "date": "May 2012 - Present",
    "desc": "Developed a number of websites for clients on Wordpress. \n\n Including Limerick Jazz Festival, which is updated on a yearly basis",
  }
  ];


  const iconChange = (icon) => {
    switch(icon) {
      case 'professional':
      return <BusinessCenterIcon />;
      case 'school':
      return <SchoolIcon />;
      case 'contact':
      return <ContactMailIcon />;
      default:
      case 'skills':
      return <BuildIcon />;
    }
  }

  const skillLevelChange = (skillValue) => {
      return     <LinearProgress variant="determinate" value={skillValue} />;
  }


  return (
    <Grid container>
    {cvArray.map((CVData) => (
      <CVSection
      key = {CVData.role}
      CVSkills = {CVData.skill[0]}
      CVSkillLevel = {skillLevelChange(CVData.skill[1])}
      CVSkills2 = {CVData.skill[2]}
      CVSkillLevel2 = {skillLevelChange(CVData.skill[3])}
      CVSkills3 = {CVData.skill[4]}
      CVSkillLevel3 = {skillLevelChange(CVData.skill[5])}
      CVSkills4 = {CVData.skill[6]}
      CVSkillLevel4 = {skillLevelChange(CVData.skill[7])}
      CVIcon = {iconChange(CVData.icon)}
      CVLocation={CVData.location}
      CVDate={CVData.date}
      CVDate2 = {CVData.date2}
      CVDesc={CVData.desc}
      CVHeader={CVData.header}
      CVRole={CVData.role}
      /> 
    ) )  } </Grid> ) 

}

export default CV;