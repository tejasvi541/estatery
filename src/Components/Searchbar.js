import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import searchSvg from "../Assets/search.svg";

const useStyles = makeStyles((theme) => ({
	search: {
		// border: "2px solid #F0F0F0",
		borderRadius: "7px",
		marginLeft: "1.5rem",
		"& label.Mui-focused": {
			color: "#000",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#000",
		},
		marginRight: "10rem",
	},
}));
const Searchbar = () => {
	const classes = useStyles();
	return (
		<TextField
			label="Search"
			className={classes.search}
			InputProps={{
				endAdornment: (
					<InputAdornment>
						<img src={searchSvg} />
					</InputAdornment>
				),
			}}
		>
			Search
		</TextField>
	);
};

export default Searchbar;
