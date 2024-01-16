import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './CVSection.module.css';
import Card from '@material-ui/core/Card';

const CV = props => {
	return (
		<React.Fragment>
			<Grid item xs={12} sm={6} lg={4} spacing={4} className={classes.cvSection}>
				<Card className={classes.Segment}>
					{props.CVIcon}
					<h3> {props.CVRole} </h3>
					<h4> {props.CVLocation} </h4>
					<h4> {props.CVDate} </h4>
					<p className={classes.CVDesc}> {props.CVDesc} </p>

					{props.CVSkills ? (
						<div>
							<h3 className={classes.skillBar}>{props.CVSkills}</h3>
							{props.CVSkillLevel}{' '}
						</div>
					) : null}

					{props.CVSkills2 ? (
						<div>
							<h3 className={classes.skillBar}>{props.CVSkills2}</h3>{' '}
							{props.CVSkillLevel2}
						</div>
					) : null}

					{props.CVSkills3 ? (
						<div>
							<h3 className={classes.skillBar}>{props.CVSkills3}</h3>{' '}
							{props.CVSkillLevel3}
						</div>
					) : null}

					{props.CVSkills4 ? (
						<div>
							<h3 className={classes.skillBar}>{props.CVSkills4}</h3>{' '}
							{props.CVSkillLevel4}
						</div>
					) : null}
				</Card>
			</Grid>
		</React.Fragment>
	);
};

export default CV;
