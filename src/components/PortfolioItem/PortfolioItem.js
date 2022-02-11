import React, { useState } from 'react';
import classes from './PortfolioItem.module.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const PortfolioItem = props => {
	let modalElement = null;
	let weblink = null;
	let github = null;
	const [imgNum, setImgNum] = useState(0);

	if (props.weblink) {
		weblink = (
			<Button
				variant='outlined'
				size='small'
				className={classes.weblink}
				href={props.weblink}
				target='blank'
			>
				LIVE
			</Button>
		);
	}

	if (props.github) {
		github = (
			<Button
				variant='outlined'
				size='small'
				className={classes.weblink}
				href={props.github}
				target='blank'
			>
				GITHUB
			</Button>
		);
	}

	return (
		<Grid item xs={12} md={4} lg={4}>
			<Card className={classes.root}>
				<CardActionArea onClick={props.clicked}>
					<CardMedia
						className={classes.media}
						image={props.image[imgNum]}
						alt={props.alt[imgNum]}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{props.title}
						</Typography>
						<Typography
							variant='body2'
							className={classes.desc}
							color='textSecondary'
							component='p'
						>
							{props.short}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Avatar variant='rounded' className={classes.Type}>
						{props.type}
					</Avatar>
					<Avatar variant='rounded' className={classes[props.project]}>
						{props.project}
					</Avatar>
					<div>
						{weblink}
						{github}
						{modalElement}
					</div>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default PortfolioItem;
