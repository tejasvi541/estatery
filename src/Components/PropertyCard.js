import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Card } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HotelIcon from "@material-ui/icons/Hotel";
import LandscapeIcon from "@material-ui/icons/Landscape";

const useStyles = makeStyles({
	root: {
		width: "270px",
		minWidth: "260px",
		height: "300px",
		backgroundColor: "#f8f7fd",
		margin: "0 1rem 1rem 0",
		padding: "0.5rem",
		"&:hover": {
			cursor: "pointer",
			border: "0.5px solid #5658dd ",
		},
	},
	img: {
		width: "100%",
		height: "150px",
	},
	flexBox: {
		display: "flex",
		flexDirection: "column",
	},
	priceText: {
		margin: 0,
		margin: "0.4rem 0",
		fontFamily: "Inter",
		fontWeight: "400",
		color: "#5658dd",
		fontSize: "20px",
	},
	nameText: {
		margin: 0,
		margin: "0.4rem 0",
		fontFamily: "Inter",
		fontWeight: "600",
		color: "#5658dd",
	},
	likeIcon: {
		color: "#5658dd",
		"&:hover": {
			cursor: "pointer",
		},
	},
	locationText: {
		fontFamily: "Inter",
		fontWeight: "500",
		color: "#5658dd",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		fontSize: "16px",
		margin: 0,
		margin: "0.4rem 0",
	},
	flexBoxRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	bedsText: {
		fontFamily: "Inter",
		fontWeight: "200",
		color: "#5658dd",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		fontSize: "12px",
		margin: 0,
		margin: "0.4rem 0",
	},
});

function PropertyCard(props) {
	const { imgUrl, price, name, location } = props;
	const [liked, setLiked] = useState(false);
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<img className={classes.img} src={imgUrl} />
			<div className={classes.flexBox}>
				<Typography
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
					variant="h7"
					className={classes.priceText}
				>
					{price.split("-")[1]}
					{liked ? (
						<FavoriteIcon
							onClick={(e) => setLiked(!liked)}
							className={classes.likeIcon}
						/>
					) : (
						<FavoriteBorderIcon
							onClick={(e) => setLiked(!liked)}
							className={classes.likeIcon}
						/>
					)}
				</Typography>
				<Typography variant="h5" className={classes.nameText}>
					{name}
				</Typography>
				<Typography variant="h7" className={classes.locationText}>
					<LocationOnIcon style={{ color: "#5658dd", fontSize: "20px" }} />
					{location}
				</Typography>
			</div>
			<div className={classes.flexBoxRow}>
				<Typography className={classes.bedsText}>
					<HotelIcon style={{ color: "#5658dd", fontSize: "20px" }} />
					{" 2 Beds"}
				</Typography>
				<Typography className={classes.bedsText}>
					<LandscapeIcon style={{ color: "#5658dd", fontSize: "20px" }} />
					{"8 x 10 m2"}
				</Typography>
			</div>
		</Card>
	);
}

export default PropertyCard;
