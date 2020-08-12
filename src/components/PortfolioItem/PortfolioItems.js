import React, {useState} from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem.js';
import AllData from '../../JSON/allData.json';
import WebData from '../../JSON/webData.json';
import PhotoData from '../../JSON/photoData.json';
import GraphicData from '../../JSON/graphicData.json';
import Grid from '@material-ui/core/Grid';
import classes from './PortfolioItems.module.css';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

import FullPortfolio from '../../components/FullPortfolio/FullPortfolio';


const PortfolioItems = (props) => {

		const [myData, setMyData] = useState(AllData);
		const [allActive, setAllActive] = useState('isActive');
		const [webActive, setWebActive] = useState(' ');
		const [graphicActive, setGraphicActive] = useState(' ');
		const [photoActive, setPhotoActive] = useState(' ');
		const [checked, setChecked] = useState(true);
		const [imgNum, setImgNum] = useState(0);
		const [currNum, setCurrNum] = useState(0);
		const imgPath = "./assets/";

	const fadeHandler = () => {
    setChecked(false);
  	setTimeout(() => {
  		setChecked(true)
  	}, 600 )
	} ;

	const clickPortfolioHandler = id => {
		setCurrNum(id);
		setImgNum(0);
		window.scrollTo({
			top: 0, 
			left: 0,
			bevahiour: 'smooth'
		});
	}
	 	
		const updateData = (newData, all, web, graphic, photo) => {
			fadeHandler();
		  	setMyData(newData);
		  	setAllActive(all);
		  	setWebActive(web);
		  	setGraphicActive(graphic);
		  	setPhotoActive(photo);
		  	setCurrNum(0);
		  	setImgNum(0);
		  }




		  let portfolioGrid = (

		      <Grow in={checked} timeout={500} >
	<Grid container spacing={2}>
	{myData.map((postData) => (
			<PortfolioItem 
			key={postData.no}
			title={postData.title}
			short={postData.short}
			full = {postData.full}
			image={postData.image}
			tag={postData.tag.join(' ')}
			type={postData.type}
			weblink={postData.link}
			project={postData.project}
			alt={postData.alt}
			clicked={() => clickPortfolioHandler(postData.no)}
			
			/> 
		)) }
	</Grid>
</Grow>
);

		  const nextPostHandler = id => {
		  	setCurrNum(id+1);
		  	setImgNum(0);
		}

		const prevPostHandler = id => {
		  	setCurrNum(id-1);
		  	setImgNum(0);
		}

		  const changeImg = id => {
		  	setImgNum(id);
		  }


		  const fullPost = id => {
		  		return (
		  			<div>
		  				<FullPortfolio 
		  				id = {myData[id].no}
		  				title={myData[id].title}
		  				short = {myData[id].short}
		  				image={imgPath + myData[id].image[imgNum]}
		  				imageLength = {myData[id].image.length}
		  				type = {myData[id].type}
		  				project = {myData[id].project}
		  				full = {myData[id].full}
		  				nextPost = {()=> nextPostHandler(currNum)}
		  				prevPost = {()=> prevPostHandler(currNum)}
		  				nextImg = {()=> changeImg(imgNum+1)}
		  				prevImg = {()=> changeImg(imgNum-1)}
		  				imgNum = {imgNum}
		  				alt = {myData[id].alt}
		  				length = {myData.length}
		  				weblink = {myData[id].link}
		  				/>
		  				</div>
		  			);
		  	}
		  		

return (
	<React.Fragment> 
	<div className={classes.PortfolioCategories}>
		<Button className={classes[allActive]}  onClick={() => updateData(AllData, 'isActive') } >All</Button>
    	<Button className={classes[webActive]}  onClick={() => updateData(WebData, '', 'isActive')}>Web</Button>
    	<Button className={classes[graphicActive]} onClick={() => updateData(GraphicData, '', '', 'isActive')} >Graphic</Button>
    	<Button className={classes[photoActive]} onClick={() => updateData(PhotoData,'', '','', 'isActive') } >Photo</Button>
    	</div>
    	<Grid container> 
    
	<Grid item sm={12}  md={5} className={classes.Center}>
    	{fullPost(currNum)}
    	</Grid>
   
    	<Grid item sm={12}  md={7} >
    	{portfolioGrid}
    	</Grid>
    	</Grid>
	</React.Fragment>
) 
}

export default PortfolioItems;

