import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ps from '../../assets/photos/chips/ps.png';
import ae from '../../assets/photos/chips/ae.png';
import xd from '../../assets/photos/chips/xd.png';
import teamPlayer from '../../assets/photos/chips/team-player.png';
import bulb from '../../assets/photos/chips/bulb.png';
import analytic from '../../assets/photos/chips/analytic.png';
import './NiceToHave.css';
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: '0px 0px 50px 0px',
	},
	chip: {
		margin: theme.spacing(1),
	},
}));

export default function NiceToHave() {
	const classes = useStyles();

	function handleDelete() {
		alert('You clicked the delete icon.');
	}

	function handleClick() {
		alert('You clicked the Chip.');
	}

	return (
		<div className={classes.root}>
			<div name="niceToHave">
				<div style={{ display: 'inline-flex' }}>
					<h3>Nice to have</h3>
				</div>
			</div>
			<Chip
				avatar={<Avatar src={ps} />}
				label="Strong photoshop skills"
                className={classes.chip}
                color="primary"

				deleteIcon={<DoneIcon />}
			/>
			<Chip
				avatar={<Avatar src={xd} />}
				label="Prototyping with adobe XD (this website) "
				className={classes.chip}
				color="primary"
				deleteIcon={<DoneIcon />}
			/>
			<Chip
				avatar={<Avatar src={ae} />}
				label="Create short sales videos"
				className={classes.chip}
				color="primary"
				deleteIcon={<DoneIcon />}
			/>
			<Chip
				avatar={<Avatar src={bulb} />}
				label="Creative mind for new advertising
                and marketing"
				className={classes.chip}
				color="primary"
				deleteIcon={<DoneIcon />}
			/>
			<Chip
				avatar={<Avatar src={analytic} />}
				label="Strong analytical skills and problem solving approach"
				className={classes.chip}
				color="primary"
				deleteIcon={<DoneIcon />}
			/>
			<Chip
				avatar={<Avatar src={teamPlayer} />}
				label="Great team player"
				className={classes.chip}
				color="primary"
				deleteIcon={<DoneIcon />}
			/>
		</div>
	);
}
