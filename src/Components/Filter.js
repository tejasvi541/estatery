import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		width: "100%",
		height: "70px",
		backgroundColor: "#f8f7fd",
		marginTop: "0.7rem",
		marginBottom: "0.7rem",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	heading: {
		marginTop: "0.5rem",
		fontFamily: "Inter",
		fontWeight: "700",
		color: "black",
	},
	form: {
		width: "15%",
		margin: "0.5rem",
	},
	formLabel: {
		color: "#5658dd",
		fontWeight: "500",
	},
	select: {
		color: "black",

		"&:after": {
			borderBottomColor: "#5658dd",
		},
		"&:before": {
			borderBottomColor: "#5658dd",
		},
		"& .MuiSvgIcon-root": {
			color: "#5658dd",
		},
		"&:hover": {
			borderBottomColor: "#5658dd",
		},
	},
	btn: {
		color: "white",
		fontFamily: "Inter",
		fontWeight: "700",
		backgroundColor: "#5658dd",
		fontSize: "13px",
		width: "10%",
		"&:hover": {
			backgroundColor: "#5658dd",
			fontSize: "13.5px",
		},
	},
});

const LocationList = [
	{ key: "Any", value: "Any" },
	{ key: "LA", value: "LA" },
	{ key: "Las Vegas", value: "Las Vegas" },
	,
	{ key: "NY", value: "NY" },
	,
	{ key: "Chicago", value: "Chicago" },
	{ key: "Denver", value: "Denver" },
];

const PriceList = [
	{ key: "Any", value: "Any" },
	{ key: "0$-500$", value: "0$-500$" },
	{ key: "500$-1000$", value: "500$-1000$" },
	{ key: "1000$-1500$", value: "1000$-1500$" },
	,
	{ key: "1500$-2000$", value: "1500$-2000$" },
	,
	{ key: "2000$-2500$", value: "2000$-2500$" },
];

const TimeList = [
	{ key: "Any", value: "Any" },
	{ key: "28th July 2022", value: "28th July 2022" },
	{ key: "29th July 2022", value: "29th July 2022" },
	{ key: "30th July 2022", value: "30th July 2022" },
	,
	{ key: "31st July 2022", value: "31st July 2022" },
	,
	{ key: "1st August 2022", value: "1st August 2022" },
	{ key: "2nd August 2022", value: "2nd August 2022" },
];

const TypeList = [
	{ key: "Any", value: "Any" },
	{ key: "Mansion", value: "Mansion" },
	{ key: "Flat", value: "Flat" },
	{ key: "Duplex", value: "Duplex" },
	{ key: "Triplex", value: "Triplex" },
];

function Filter(props) {
	const {
		propertyType,
		setPropertyType,
		Price,
		setPrice,
		Time,
		setTime,
		Location,
		setLocation,
		filterHandler,
	} = props;
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<FormControl className={classes.form}>
				<InputLabel
					className={classes.formLabel}
					id="demo-simple-select-standard-label"
				>
					Location
				</InputLabel>
				<Select
					MenuProps={{
						anchorOrigin: {
							vertical: "bottom",
							horizontal: "left",
						},
						transformOrigin: {
							vertical: "top",
							horizontal: "left",
						},
						getContentAnchorEl: null,
					}}
					className={classes.select}
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={Location}
					onChange={(e) => setLocation(e.target.value)}
					label="Location"
				>
					{LocationList.map((item, i) => (
						<MenuItem value={item.value}>{item.key}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl className={classes.form}>
				<InputLabel
					className={classes.formLabel}
					id="demo-simple-select-standard-label"
				>
					When
				</InputLabel>
				<Select
					MenuProps={{
						anchorOrigin: {
							vertical: "bottom",
							horizontal: "left",
						},
						transformOrigin: {
							vertical: "top",
							horizontal: "left",
						},
						getContentAnchorEl: null,
					}}
					className={classes.select}
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={Time}
					onChange={(e) => setTime(e.target.value)}
					label="When"
				>
					{TimeList.map((item, i) => (
						<MenuItem value={item.value}>{item.key}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl className={classes.form}>
				<InputLabel
					className={classes.formLabel}
					id="demo-simple-select-standard-label"
				>
					Price
				</InputLabel>
				<Select
					MenuProps={{
						anchorOrigin: {
							vertical: "bottom",
							horizontal: "left",
						},
						transformOrigin: {
							vertical: "top",
							horizontal: "left",
						},
						getContentAnchorEl: null,
					}}
					className={classes.select}
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={Price}
					onChange={(e) => setPrice(e.target.value)}
					label="Price"
				>
					{PriceList.map((item, i) => (
						<MenuItem value={item.value}>{item.key}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl className={classes.form}>
				<InputLabel
					className={classes.formLabel}
					id="demo-simple-select-standard-label"
				>
					Property Type
				</InputLabel>
				<Select
					MenuProps={{
						anchorOrigin: {
							vertical: "bottom",
							horizontal: "left",
						},
						transformOrigin: {
							vertical: "top",
							horizontal: "left",
						},
						getContentAnchorEl: null,
					}}
					className={classes.select}
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={propertyType}
					onChange={(e) => setPropertyType(e.target.value)}
					label="Property Type"
				>
					{TypeList.map((item, i) => (
						<MenuItem value={item.value}>{item.key}</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button onClick={filterHandler} className={classes.btn}>
				Search
			</Button>
		</Card>
	);
}

export default Filter;
