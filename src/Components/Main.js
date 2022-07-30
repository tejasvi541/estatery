import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Filter from "./Filter";
const useStyles = makeStyles({
	root: {
		width: "100%",
		padding: "1rem",
	},
	heading: {
		marginTop: "0.5rem",
		fontFamily: "Inter",
		fontWeight: "700",
		color: "white",
	},
	subtext: {
		fontFamily: "Inter",
		fontWeight: "500",
		color: "white",
		fontSize: "15px",
	},
	btn: {
		color: "white",
		fontFamily: "Inter",
		fontWeight: "700",
		backgroundColor: "#5658dd",
		fontSize: "11px",
		"&:hover": {
			backgroundColor: "#5658dd",
		},
		marginLeft: "0.5rem",
	},
	flexBox: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: "40px",
	},
});

const Main = () => {
	const classes = useStyles();
	const [dummyData, setData] = useState([]);
	const [propertyType, setPropertyType] = useState("Any");
	const [Price, setPrice] = useState("Any");
	const [Time, setTime] = useState("Any");
	const [Location, setLocation] = useState("Any");
	const [loading, setLoading] = useState(false);

	const clearFilterHandler = () => {
		setPropertyType("Any");
		setPrice("Any");
		setTime("Any");
		setLocation("Any");
		setData("dummy");
	};
	const filterHandler = () => {};
	return (
		<div className={classes.root}>
			<Filter
				propertyType={propertyType}
				setPropertyType={setPropertyType}
				Price={Price}
				setPrice={setPrice}
				Time={Time}
				setTime={setTime}
				Location={Location}
				setLocation={setLocation}
				filterHandler={filterHandler}
			/>
			<div className={classes.flexBox}>
				<Typography variant="h7" className={classes.subtext}>
					{dummyData.length} Results Found
				</Typography>
				{Location !== "Any" ||
				Price !== "Any" ||
				Time !== "Any" ||
				propertyType !== "Any" ? (
					<Button onClick={clearFilterHandler} className={classes.btn}>
						Clear Filters
					</Button>
				) : null}
			</div>
		</div>
	);
};

export default Main;
