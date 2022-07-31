import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Filter from "./Filter";
import { dummy } from "../Data/dummyData";
import PropertyList from "./PropertyList";

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
	localTxt: {
		fontFamily: "Inter",
		fontWeight: "500",
		color: "#5658dd",
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
	const [dummyData, setData] = useState(dummy || []);
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
		setData(dummy);
	};
	const filterHandler = () => {
		setLoading(true);
		if (
			propertyType === "Any" &&
			Price === "Any" &&
			Time === "Any" &&
			Location === "Any"
		) {
			setData(dummy);
		} else {
			let list1 = [];
			let list2 = [];
			let list3 = [];
			let list4 = [];

			if (propertyType !== "Any") {
				list1 = dummy.filter((item) => item.type === propertyType);
			}
			if (Location !== "Any") {
				list2 = dummy.filter((item) => item.location === Location);
			}
			if (Price !== "Any") {
				list3 = dummy.filter((item) => item.price === Price);
			}
			if (Time !== "Any") {
				list4 = dummy.filter((item) => item.when === Time);
			}

			if (propertyType === "Any") {
				list1 = dummy;
			}
			if (Location === "Any") {
				list2 = dummy;
			}
			if (Price === "Any") {
				list3 = dummy;
			}
			if (Time === "Any") {
				list4 = dummy;
			}

			let merge1 = list1.filter((e) => {
				return list2.some((item) => item.id === e.id);
			});

			let merge2 = list3.filter((e) => {
				return list4.some((item) => item.id === e.id);
			});

			let merge = merge1.filter((e) => {
				return merge2.some((item) => item.id === e.id);
			});

			setData(merge);
		}
		setLoading(false);
	};
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
				<Typography variant="h7" className={classes.localTxt}>
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
			<PropertyList loading={loading} propertyData={dummyData} />
		</div>
	);
};

export default Main;
