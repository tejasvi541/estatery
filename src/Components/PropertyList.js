import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import PropertyCard from "./PropertyCard";

const useStyles = makeStyles({
	root: {
		width: "100%",
		padding: "0.4rem",
		height: "calc(100vh - 330px)",
		overflowY: "auto",
		overflowX: "hidden",
		position: "relative",
	},
	content: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap",
	},
});

function PropertyList(props) {
	const { propertyData, loading } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				{loading ? (
					<CircularProgress style={{ color: "#5658dd" }} />
				) : (
					<>
						{propertyData.map((item, i) => (
							<PropertyCard
								key={i}
								imgUrl={item.img}
								price={item.price}
								name={item.name}
								location={item.location}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default PropertyList;
