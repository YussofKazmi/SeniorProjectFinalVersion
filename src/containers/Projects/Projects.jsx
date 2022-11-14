/** @format */

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import baseball from "./images/baseball.jpg";
import bioinf from "./images/bioinf.jpg";
import bitcoin from "./images/bitcoin.jpg";
import { default as heartDisease } from "./images/heartDisease.PNG";

/**
 * Component for Containing and Rendering All Projects.
 *
 * @component
 * Leverages Box and Grid Componenets for layout Orientation, spacing, and margin
 * Uses Typography Componenet to showcase and manipulate text, responsively
 * Uses Display Project Card function Componenet to display info about each project
 * @example
 
 *  return (
 *   <Projects />
 * )
 *
 */
const Projects = () => {
	return (
		<Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
			<Grid
				container
				spacing={1}
				sx={{ margin: "10px", marginBottom: "50px" }}>
				<Grid xs> </Grid>

				<Grid xs={7}>
					<Box sx={{ width: "100%" }}>
						<Stack spacing={1}>
							<Fade
								in={true}
								appear={true}
								timeout={1000}
								orientation="horizontal">
								<Typography
									sx={{ marginTop: "50px", marginBottom: "30px" }}
									variant="h4"
									component="h4">
									The Cool Stuff. Take a Look At Some of My Favorite Projects.
								</Typography>
							</Fade>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>

							<DisplayProjectsCard
								info={{
									title: "Big Data Heart Disease Classifier",
									image: heartDisease,
									descrip:
										"This project was an interesting project that took 76 attributes of data for each medical patient from a journal, and used them to feed a machine learning model that would then predict the prescence of heart disease within them",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>

							<DisplayProjectsCard
								info={{
									title: "MLB Teams Deviations Analysis",
									image: baseball,
									descrip:
										"This project delves into the world of baseball, specifically in the Major leagues. For this project, I took all the win/loss data on all the teams from each season from 1871 to 2018, and then used that data to find out 3 things:\n1. The number of games each team was expected to win tht season, based off their stats\n2.) If a team was historially lucky or unlucky based off all the post-seaosn infromation we have now\n3.) If a team had a an advantage by being at home or away for each game within each season",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>
							<DisplayProjectsCard
								info={{
									title: "Bitcoin Trading-Pattern Machine Learning Analysis",
									image: bitcoin,
									descrip:
										"This project is centered around machine learning classification tasks in relation to Bitcoin trading patterns in ransomware entities. Ransomeware is basically a program that encrypts file in such a way that the only way to get past that encryption is to pay money. Therefore it is extorition of money, and this type of attack deals in payment through bitcoin because of bitcoin’s high accessability and ease of use.",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>
							<DisplayProjectsCard
								info={{
									title: "Bioinformatics Gene Motif Calculator",
									image: bioinf,
									descrip:
										"This project breaks into the world of Bioinformatics which is a relatively new field combining data science and biology, essentially. One big theme in Bioinformatics, is analyzing genetic codes and finding patterns in the code such as genetic motifs (a repeated phrase of a gene code in in the form of its four bases). Gene motifs are short and recurring which signifies that maybet here is some type of biological logic or function present there that can be further investigated.",
								}}></DisplayProjectsCard>
							<Fade
								in={true}
								appear={true}
								timeout={2000}
								orientation="horizontal">
								<Divider
									sx={{ backgroundColor: "white" }}
									light={true}
								/>
							</Fade>
						</Stack>
					</Box>
				</Grid>
				<Grid xs></Grid>
			</Grid>
		</Box>
	);
};

/**
 * Component for Displaying a Project.
 *
 * @component
 * Leverages Card Componenet for layout Orientation, Content spacing, and Automatic margin adjusting
 * Uses Typography Componenet to showcase and manipulate text, responsively
 * Uses <Fade> Transition Component to render animated transitions in a specific manner
 * @example
 
 *  return (
 *   <Projects />
 * )
 *
 */
function DisplayProjectsCard({ info }) {
	return (
		<Fade
			in={true}
			appear={true}
			timeout={3000}
			orientation="horizontal">
			<Card
				sx={{
					display: "flex",
					backgroundColor: "black",
					color: "white",
				}}>
				<CardMedia
					component="img"
					sx={{ width: 400 }}
					image={info.image}
					alt="Project Image"
				/>
				<CardActionArea>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<CardContent sx={{ flex: "1 0 auto", color: "white" }}>
							<Typography
								component="div"
								variant="h5">
								{info.title}
							</Typography>
							<Typography
								variant="subtitle1"
								color="white"
								component="div">
								{info.descrip}
							</Typography>
						</CardContent>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								pl: 1,
								pb: 1,
							}}></Box>
					</Box>
				</CardActionArea>
			</Card>
		</Fade>
	);
}

export default Projects;
