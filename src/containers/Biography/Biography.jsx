/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import introPhoto from "./introPhoto.PNG";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Fade from "@mui/material/Fade";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

/**
 * Component for Containing ands Renderign Static Text Descriptions For Biography.
 *
 * @component
 * @example
 *
 *
 *  return (
 *   <TextPaper  />
 * )
 *
 */
function TextPaper() {
	return (
		<Grid
			container
			spacing={2}>
			<Grid xs></Grid>
			<Grid xs={10}>
				<Grid xs={"auto"}>
					<Fade
						in={true}
						appear={true}
						timeout={1500}>
						<Fade
							in={true}
							appear={true}
							timeout={3000}>
							<Typography
								variant="h3"
								component="h2"
								textAlign={"center"}
								sx={{ margin: "10px" }}>
								Hey! I'm Yussof
							</Typography>
						</Fade>
					</Fade>

					<Fade
						in={true}
						appear={true}
						timeout={1500}>
						<Divider sx={{ marginY: "15px" }}></Divider>
					</Fade>

					<Fade
						in={true}
						appear={true}
						timeout={3000}>
						<Typography
							variant="h6"
							component="h2"
							sx={{ padding: "20px" }}>
							I am a software developer, and a student in a data science masters
							program. More importantly, I like to use technology to help build
							and create what we want in life.
						</Typography>
					</Fade>
					<Fade
						in={true}
						appear={true}
						timeout={3000}>
						<Typography
							variant="h5"
							component="h2"
							textAlign={"center"}
							sx={{ marginY: "20px" }}>
							However, I always try to remind myself and others, that we
							<u>
								<strong> Work to Live, Not Live to Work</strong>
							</u>
						</Typography>
					</Fade>
					<Fade
						in={true}
						appear={true}
						timeout={1500}>
						<Divider sx={{ marginY: "15px" }}></Divider>
					</Fade>

					<Fade
						in={true}
						appear={true}
						timeout={3000}>
						<Typography
							variant="h6"
							component="h2"
							sx={{ padding: "20px" }}>
							In my free time, I love to go out with my friends and explore new
							places to eat or just meet new people; work out at the gym so I
							can hopefully live forever, and play videogames because like my
							parents <i> definitely</i> said "You can never play enough video
							games".
						</Typography>
					</Fade>
					<Fade
						in={true}
						appear={true}
						timeout={3000}>
						<Typography
							variant="h6"
							component="h2"
							sx={{ padding: "20px" }}>
							I am a big fan of learning about ways we can augment our daily
							routine with technology in a safe and ethical manner.
						</Typography>
					</Fade>
					<Fade
						in={true}
						appear={true}
						timeout={1500}>
						<Divider sx={{ marginY: "15px" }}></Divider>
					</Fade>

					<Fade
						in={true}
						appear={true}
						timeout={3000}>
						<Typography
							variant="h6"
							component="h2"
							sx={{ padding: "20px" }}>
							There is so much potential out there to actually do good for and
							by people with programming and many other forms of technology, and
							I am hoping to be a part of that group people that can help all of
							us achieve that.
						</Typography>
					</Fade>
					<Fade
						in={true}
						appear={true}
						timeout={1500}>
						<Divider sx={{ marginY: "15px" }}></Divider>
					</Fade>
				</Grid>
				<Divider sx={{}}></Divider>
			</Grid>
			<Grid xs></Grid>
		</Grid>
	);
}

/**
 * Component for Rendering and Algining React Component of Biography Image.
 *
 * @component
 *
 * Renders Biography About Me Photo and uses inline sc property to access css miorphing directly as opposed to a seperate document
 *
 * @example
 *
 *  return (
 *   <ImagePaper />
 * )
 *
 */
function ImagePaper() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					ml: 0,
					width: "auto",
					height: "auto",
				},
			}}>
			<Fade
				in={true}
				appear={true}
				timeout={1500}>
				<Paper sx={{}}>
					<CardMedia
						component="img"
						sx={{ width: "350px" }}
						image={introPhoto}
						alt="About Me Image"
					/>
				</Paper>
			</Fade>
		</Box>
	);
}

/**
 * Component for Becoming Container of and Rendering Every React Compoenent needed to show Biography Page.
 *
 * @component
 * @example
 *
 *  return (
 *   <Biography  />
 * )
 *
 */
const Biography = () => {
	return (
		<Box sx={{ flexGrow: 1, marginY: "50px" }}>
			<Grid
				container
				xs={12}
				sx={{ marginY: "100px" }}>
				<Grid xs></Grid>
				<Grid xs={4}>
					<TextPaper>Hello</TextPaper>
				</Grid>

				<Grid
					xs={"auto"}
					sx={{ marginRight: "10px" }}>
					<Divider
						sx={{ marginY: "10px", marginRight: "20px" }}
						orientation={"vertical"}></Divider>
				</Grid>
				<Grid xs={3}>
					<ImagePaper></ImagePaper>
				</Grid>
				<Grid xs></Grid>
			</Grid>
		</Box>
	);
};

export default Biography;
