import React from 'react';
import classes from './FullPortfolio.module.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Card from '@material-ui/core/Card';

const fullPortfolio = props => {
	return (
		<React.Fragment>
			<Card className={classes.FullPortfolio}>
				{props.currNum > 0 && props.length !== 1 ? (
					<Button size='small' onClick={props.prevPost}>
						prev
					</Button>
				) : null}
				{props.currNum >= 0 && props.length !== 1 ? (
					<Button size='small' onClick={props.nextPost}>
						next
					</Button>
				) : null}
				<Typography
					gutterBottom
					className={classes.PortfolioTitle}
					variant='h4'
					component='h2'
				>
					{props.title}
				</Typography>
				<Button className={classes.Type}> {props.type} </Button>
				<Button className={classes[props.project]}> {props.project} </Button>
				<br />
				<br />
				{props.weblink ? (
					<Button
						size='small'
						className={classes.Weblink}
						href={props.weblink}
						target='blank'
						variant='outlined'
					>
						LIVE
					</Button>
				) : null}{' '}
				{props.github ? (
					<Button
						size='small'
						className={classes.Weblink}
						href={props.github}
						target='blank'
						variant='outlined'
					>
						GITHUB
					</Button>
				) : null}{' '}
				<br />
				<Typography variant='body2'>
					{props.short} <br />
					{props.full}{' '}
				</Typography>{' '}
				<br />
				<a href={props.image}>
					<img className={classes.Image} alt={props.alt} src={props.image} />
				</a>
				<br />
				<p className={classes.Alt}>{props.alt[props.imgNum]}</p>
				{props.imgNum > 0 ? (
					<NavigateBeforeIcon
						className={classes.nextImg}
						onClick={props.prevImg}
					>
						{' '}
						Prev img{' '}
					</NavigateBeforeIcon>
				) : null}
				{props.imageLength.length > 1 || props.imgNum < props.imageLength - 1 ? (
					<NavigateNextIcon className={classes.nextImg} onClick={props.nextImg}>
						{' '}
						Next img{' '}
					</NavigateNextIcon>
				) : null}
			</Card>
		</React.Fragment>
	);
};

export default fullPortfolio;
