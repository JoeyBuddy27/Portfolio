import React, { useState, useEffect } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem.js';
import AllData from '../../JSON/allData.json';
import Grid from '@material-ui/core/Grid';
import classes from './PortfolioItems.module.css';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

import FullPortfolio from '../../components/FullPortfolio/FullPortfolio';

const PortfolioItems = props => {
	const [myData, setMyData] = useState(AllData);
	const [allActive, setAllActive] = useState('isActive');
	const [webActive, setWebActive] = useState(' ');
	const [graphicActive, setGraphicActive] = useState(' ');
	const [photoActive, setPhotoActive] = useState(' ');
	const [checked, setChecked] = useState(true);
	const [imgNum, setImgNum] = useState(0);
	const [currNum, setCurrNum] = useState(0);

	useEffect(() => {
		console.log('called use effect');
	}, [webActive, graphicActive, photoActive, allActive]);

	const fadeHandler = () => {
		setChecked(false);
		setTimeout(() => {
			setChecked(true);
		}, 600);
	};

	const updateData = (newData, all, web, graphic, photo) => {
		fadeHandler();
		if (newData === 'all') {
			setMyData(AllData);
		} else {
			setMyData(() =>
				AllData.filter(
					data => data.tag[0] === newData || data.tag[1] === newData,
				),
			);
		}

		setAllActive(all);
		setWebActive(web);
		setGraphicActive(graphic);
		setPhotoActive(photo);
		setCurrNum(0);
		setImgNum(0);
	};

	console.log(myData);

	let portfolioGrid = (
		<Grow in={checked} timeout={500}>
			<Grid container spacing={2}>
				{myData.map((postData, index) => (
					<PortfolioItem
						key={postData.no}
						number={index}
						title={postData.title}
						short={postData.short}
						full={postData.full}
						image={postData.image}
						tag={postData.tag.join(' ')}
						type={postData.type}
						weblink={postData.link}
						github={postData.github}
						project={postData.project}
						alt={postData.alt}
						clicked={() => {
							setCurrNum(index);
							setImgNum(0);
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: 'smooth',
							});
						}}
					/>
				))}
			</Grid>
		</Grow>
	);

	const nextPostHandler = id => {
		if (id >= myData.length - 1) {
			setCurrNum(0);
		} else {
			setCurrNum(id + 1);
			setImgNum(0);
		}
	};

	const prevPostHandler = id => {
		setCurrNum(id - 1);
		setImgNum(0);
	};

	const changeImg = id => {
		setImgNum(id);
	};

	const fullPost = id => {
		let currPortfolioNum;

		currPortfolioNum = id;

		console.log(currNum);

		return (
			<div>
				<FullPortfolio
					id={myData[id].no}
					currNum={currNum}
					title={myData[currPortfolioNum].title}
					short={myData[currPortfolioNum].short}
					image={myData[currPortfolioNum].image[imgNum]}
					imageLength={myData[currPortfolioNum].image.length}
					type={myData[currPortfolioNum].type}
					project={myData[currPortfolioNum].project}
					full={myData[currPortfolioNum].full}
					nextPost={() => nextPostHandler(currNum)}
					prevPost={() => prevPostHandler(currNum)}
					nextImg={() => changeImg(imgNum + 1)}
					prevImg={() => changeImg(imgNum - 1)}
					imgNum={imgNum}
					alt={myData[currPortfolioNum].alt}
					length={myData.length}
					weblink={myData[currPortfolioNum].link}
					github={myData[currPortfolioNum].github}
				/>
			</div>
		);
	};

	return (
		<React.Fragment>
			<div className={classes.PortfolioCategories}>
				<Button
					className={classes[allActive]}
					onClick={() => updateData('all', 'isActive')}
				>
					All
				</Button>
				<Button
					className={classes[webActive]}
					onClick={() => updateData('web', '', 'isActive')}
				>
					Web
				</Button>
				<Button
					className={classes[graphicActive]}
					onClick={() => updateData('graphic', '', '', 'isActive')}
				>
					Graphic
				</Button>
				<Button
					className={classes[photoActive]}
					onClick={() => updateData('photo', '', '', '', 'isActive')}
				>
					Photo
				</Button>
			</div>
			<Grid container>
				<Grid item sm={12} md={5} className={classes.Center}>
					{fullPost(currNum)}
				</Grid>

				<Grid item sm={12} md={7}>
					{portfolioGrid}
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default PortfolioItems;
