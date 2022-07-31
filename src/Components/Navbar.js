import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import House from "../Assets/House.svg";

const useStyles = makeStyles({
	root: {
		width: "100%",
		height: "100px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontFamily: "Inter",
		fontWeight: "900",
		color: "white",
		margin: "1rem 1rem 1rem 2rem",
	},
	span: {
		fontFamily: "Inter",
		fontWeight: "900",
		color: "#5658dd",
	},
	optionText: {
		margin: 0,
		fontFamily: "Inter",
		fontWight: "600",
		margin: "1rem 2rem 1rem 1rem",
		color: "#000",
		"&:hover": {
			color: "#6e66ef",
			cursor: "pointer",
			borderBottom: "solid 1px #5658dd",
		},
	},
	activeLink: {
		margin: 0,
		fontFamily: "Inter",
		fontWight: "600",
		margin: "0.2rem 0.5rem 0.2rem 0.2rem",
		color: "#5658dd",
	},
	activeLinkWrapper: {
		padding: "5px",
		backgroundColor: "#eae6fb",
		border: "1px solid #6e66ef",
		opacity: "0.6",
		borderRadius: "5px",
	},
	optionWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		displayDirection: "row",
	},
	icon: {
		marginRight: "5px",
		height: "30px",
		width: "30px",
	},
	buttonWrapper: {
		width: "35%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "right",

		margin: "1rem 2rem 1rem 1rem",
	},
	btnLogin: {
		marginRight: "1rem",
		borderColor: "#6e66ef",
		color: "#6e66ef",
	},
	btnSignup: {
		borderColor: "#6e66ef",
		backgroundColor: "#6e66ef",
		color: "white",
	},
});

function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.optionWrapper}>
				<Typography variant="h4" className={classes.title}>
					<span className={classes.span}>
						<img src={House} className={classes.icon} />
						estatery
					</span>
				</Typography>
				<div className={classes.activeLinkWrapper}>
					<Typography className={classes.activeLink} variant="h6">
						Rent
					</Typography>
				</div>
				<Typography className={classes.optionText} variant="h6">
					Sell
				</Typography>
				<Typography className={classes.optionText} variant="h6">
					Buy
				</Typography>
				<Typography className={classes.optionText} variant="h6">
					Manage Property
				</Typography>
				<Typography className={classes.optionText} variant="h6">
					Resources
				</Typography>
			</div>
			<div className={classes.buttonWrapper}>
				<Button variant="outlined" className={classes.btnLogin}>
					Log In
				</Button>
				<Button variant="contained" className={classes.btnSignup}>
					Sign Up
				</Button>
			</div>
		</div>
	);
}

export default NavBar;
