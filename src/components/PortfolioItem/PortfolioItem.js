import React, { useState} from 'react';
import classes from './PortfolioItem.module.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '../UI/Modal/Modal';
import Avatar from '@material-ui/core/Avatar';



const PortfolioItem = (props) => {

	let modalElement = null; 
	let weblink = null;
	const [modal, setModal] = useState(false);
	const [imgNum, setImgNum] = useState(0);


	// const openImage = img => {
	// 	setModal(true);
	// 	console.log("opened" + modalFade)
	// }

	const modalClosedHandler = () => {
		setModal(false);
		setImgNum(0);
	}

	 const addImgNumHandler = () => {
	 	if (imgNum < props.image.length-1){
	 	setImgNum(imgNum+1);
	 }
	 else {
	 	setImgNum(imgNum);
	 }
	}

	const subtractImgNumHandler = () => {
		setImgNum(imgNum-1);
	}

	 const imgPath = "./assets/";


	// if (modal) {
	// 	modalElement = (
	// 	<Modal show={modal} modalClosed={modalClosedHandler}>
	// 	<Grid container spacing={1}>
	// 	<Grid item sm={6}>
	// 	<Avatar variant="rounded" onClick={modalClosedHandler}> X </Avatar>
	// 	<img src={imgPath + props.image[imgNum]} alt={props.alt[imgNum]} className={classes.PortfolioImage} />
	// 	<p className={classes.Alt}>{props.alt[imgNum]}</p>
	// 	{imgNum > 0 ? <Button onClick={() => subtractImgNumHandler()}> PREV </Button>		//if there are multiple images, allow cycling through them on the modal. If not, don't display cycle buttons
 // 		  : null  }	
 // 		  {props.image.length > 1 ? <Button onClick={() => addImgNumHandler()}>				
 // 		 NEXT</Button> :null }
	// 	</Grid>
	// 	<Grid item sm={6}>
	// 	<Typography gutterBottom variant="h4" component="h2">
 // 		{props.title} </Typography>	
 // 		<center><Button size="small"
	// 	 className= {classes.Type}
	//  > {props.type} </Button> <Button size="small"
	// 	 className= {classes[props.project]}
	//  > {props.project} </Button></center>
	// 	<p className={classes.desc}>{props.short}</p>
	// 	<p className={classes.desc}>{props.full}</p>
	// 	{props.weblink  ? <Button variant="outlined" size="large" 
	// 			className={classes.weblink} href={props.weblink} 
	// 			target="blank">VISIT LIVE</Button> : null}
	// 	</Grid>
	// 	</Grid>
	// 	</Modal>

	// 			);
	// 	}
		if (props.weblink) {
			weblink = (
				<Button variant="outlined" size="small" 
				className={classes.weblink} href={props.weblink} 
				target="blank">VISIT LIVE</Button>
				);
		}


	return ( 
		 <Grid item xs={12} md ={4} lg={4}>
		 <Card className={classes.root} >
		 <CardActionArea
		 // onClick={(() => {openImage(props.title) })} 
		 onClick={props.clicked} 
		 >
		 <CardMedia 
		 className={classes.media}
		 image={imgPath + props.image[imgNum]}
		 alt={props.alt[imgNum]}
		/>
		 <CardContent>
		 <Typography gutterBottom variant="h5" component="h2">
		 {props.title}
		 </Typography>
		 <Typography variant="body2" className={classes.desc} color="textSecondary" component="p">
		  {props.short}
		 </Typography>
		 </CardContent>
		 </CardActionArea>
		 <CardActions > 
		<Avatar variant="rounded" 
		 className= {classes.Type}
	 > {props.type} </Avatar>
	 <Avatar variant="rounded" 
		 className= {classes[props.project]}
	 > {props.project} </Avatar>
	 {weblink}
	 {modalElement}
		</CardActions>
		 </Card>
		 </Grid>
		 );
}


export default PortfolioItem;