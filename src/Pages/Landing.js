import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Main from "../Components/Main";
import Searchbar from "../Components/Searchbar";

const useStyles = makeStyles({
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	headingWrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	content: {
		width: "80%",
	},
	heading: {
		marginTop: "0.5rem",
		marginBottom: "0.5rem",
		marginLeft: "15rem",
		fontFamily: "Inter",
		fontWeight: "700",
		color: "black",
	},
});

function Landing() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.headingWrapper}>
				<Typography className={classes.heading} variant="h4">
					Search Properties To Rent Here.
				</Typography>
				<Searchbar />
			</div>
			<div className={classes.content}>
				<Main />
			</div>
		</div>
	);
}

export default Landing;
