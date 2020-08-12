import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CV from '../../components/CV/CV';
import Bio from '../../components/Bio/Bio';
import classes from './About.module.css';

const About = (props) => {

         const [bioActive, setBioActive] = useState("isActive");
         const [cvActive, setCVActive] = useState("");

        
        const onBioClicked = (page) => {
            setContent(page);
            setBioActive("isActive");
            setCVActive("");
        }

        const onCVClicked = (page) => {
            setContent(page);
            setBioActive("");
            setCVActive("isActive");
        }

        let bio = (
		<Bio />
);

let cv = (
   <CV 
   />
   );

  const [content, setContent] = useState(bio);

        return (
             <React.Fragment>
             <center>
             <Button className={classes[bioActive]} onClick={()=> onBioClicked(bio)}> BIO </Button>
             <Button className={classes[cvActive]} onClick={()=>  onCVClicked(cv)}> CV </Button>
             </center>
             {content}
            </React.Fragment>
            );
}

export default About;