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
	const [visualActive, setVisualActive] = useState(' ');
	const [checked, setChecked] = useState(true);
	const [imgNum, setImgNum] = useState(0);
	const [currNum, setCurrNum] = useState(0);

	useEffect(() => {}, [webActive, visualActive, allActive]);

	const fadeHandler = () => {
		setChecked(false);
		setTimeout(() => {
			setChecked(true);
		}, 600);
	};

	const updateData = (newData, all, web, visual) => {
		fadeHandler();
		if (newData === 'all') {
			setMyData(AllData);
		} else {
			console.log(AllData);
			setMyData(() => AllData.filter(data => data.tag.includes(newData)));
		}

		setAllActive(all);
		setWebActive(web);
		setVisualActive(visual);

		setCurrNum(0);
		setImgNum(0);
	};

	let portfolioGrid = (
		<Grow in={checked} timeout={500}>
			<Grid container spacing={3}>
				{myData
					?.filter(item => !item.hide)
					?.map((postData, index) => (
						<>
							<PortfolioItem
								key={postData?.no}
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
						</>
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

	// TODO: Replace this with a modal (TBC)
	const fullPost = id => {
		let currPortfolioNum;
		currPortfolioNum = id;

		// return (
		// 	<div>
		// 		<FullPortfolio
		// 			id={myData[id]?.no}
		// 			currNum={currNum}
		// 			title={myData[currPortfolioNum].title}
		// 			short={myData[currPortfolioNum].short}
		// 			image={myData[currPortfolioNum].image[imgNum]}
		// 			imageLength={myData[currPortfolioNum].image.length}
		// 			type={myData[currPortfolioNum].type}
		// 			project={myData[currPortfolioNum].project}
		// 			full={myData[currPortfolioNum].full}
		// 			nextPost={() => nextPostHandler(currNum)}
		// 			prevPost={() => prevPostHandler(currNum)}
		// 			nextImg={() => changeImg(imgNum + 1)}
		// 			prevImg={() => changeImg(imgNum - 1)}
		// 			imgNum={imgNum}
		// 			alt={myData[currPortfolioNum].alt}
		// 			length={myData.length}
		// 			weblink={myData[currPortfolioNum].link}
		// 			github={myData[currPortfolioNum].github}
		// 		/>
		// 	</div>
		// );
	};

	return (
		<React.Fragment>
			<div style={{ marginLeft: 8, marginRight: 8 }}>
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
						className={classes[visualActive]}
						onClick={() => updateData('visual', '', '', 'isActive')}
					>
						Visual
					</Button>
				</div>
				<Grid container className='mt-5'>
					{/* <Grid item sm={12} md={5} className={classes.Center}>
					{fullPost(currNum)}
				</Grid> */}

					{/* <Grid item sm={12}> */}
					{portfolioGrid}
					{/* </Grid> */}
				</Grid>
			</div>
		</React.Fragment>
	);
};

export default PortfolioItems;
