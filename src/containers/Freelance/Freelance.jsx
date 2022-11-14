/** @format */

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import "./Freelance.css";

/**
 * Component for showing Item Background Object Overlay for Further Componenets.
 *
 * @component
 * @example
 * theme = Defining our CSS Bacground Color
 * return (
 *   <Item />
 * )
 */
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

/**
 * Component for Rendering and Containing All Freelance Information and services.
 *
 * @component
 * @example
 
 *  return (
 *   <Freelance />
 * )
 *
 */
const Freelance = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={3}>
				<Grid xs></Grid>
				<Grid xs={"auto"}>
					<Box sx={{ width: "100%" }}>
						<Fade
							in={true}
							appear={true}
							timeout={1000}
							orientation="horizontal">
							<Typography
								sx={{ marginTop: "20px", marginBottom: "10px" }}
								variant="h2"
								component="h2">
								Freelance Services!
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
							</Typography>
						</Fade>
					</Box>
				</Grid>

				<Grid xs></Grid>
			</Grid>
			<Grid
				container
				spacing={3}>
				<Grid xs></Grid>
				<Grid xs={4}>
					<Typography
						variant="h5"
						component="h2"
						textAlign={"center"}
						sx={{ margin: "10px", marginY: "20px" }}>
						I Offer A Bunch of Freelance Services Regarding Tasks that require
						the usage of Software Engineering, Data Science/Analytics, Machine
						Learning Implementation!
					</Typography>
					<Typography
						variant="h5"
						component="h2"
						textAlign={"center"}
						sx={{ margin: "10px", marginY: "20px" }}>
						Anything, you want to make happen, whther it be a new website or web
						application, a new database that is lightweight yet elegant, or an
						analytics app that helps you stay ahead of your competition, We can
						asbolutely make it happen!
					</Typography>
					<Grid
						container
						spacing={3}>
						<Grid xs></Grid>
						<Grid xs="auto">
							<Grid xs="auto">
								<Item>
									Lets Connect! Feel Free To Reach out to me through Email, or
									Linkedin!
								</Item>
							</Grid>
							<Grid
								container
								xs="auto">
								<Grid xs></Grid>
								<Grid>
									<Item>
										<a href="https://www.linkedin.com/in/joekazmi/">Linkedin</a>
									</Item>
								</Grid>
								<Grid>
									<Item>
										{" "}
										<Typography sx={{ color: "white" }}>
											<a href="mailto:yussofk@gmail.com">Email</a>
										</Typography>
									</Item>
								</Grid>
								<Grid>
									<Item>
										{" "}
										<a href="https://github.com/YussofKazmiGithub">Github</a>
									</Item>
								</Grid>
								<Grid xs></Grid>
							</Grid>
						</Grid>

						<Grid xs></Grid>
					</Grid>
				</Grid>

				<Grid xs={5}>
					<Grid
						xs={12}
						md={7}
						lg={8}
						spacing={7}>
						<Grid xs={"auto"}>
							<Item>
								<Box
									id="category-a"
									sx={{ fontSize: "25px", textTransform: "uppercase" }}>
									<u>Project Planning and Devlopment</u>
								</Box>
								<Box
									component="ul"
									aria-labelledby="category-a"
									sx={{ pl: 2, listStyleType: "none" }}>
									<Typography
										variant="h6"
										component="h2"
										textAlign={"center"}>
										<li>Mapping Out a Proper Project Outline and Design</li>
										<li>Everything From Initial Formulation to Deployment</li>
										<li>Constant Guiudance Throughout the Process</li>
									</Typography>
								</Box>
							</Item>
						</Grid>
						<Grid xs={"auto"}>
							<Item>
								<Box
									id="category-a"
									sx={{ fontSize: "25px", textTransform: "uppercase" }}>
									<u>Web Development</u>
								</Box>
								<Box
									component="ul"
									aria-labelledby="category-a"
									sx={{ pl: 2, listStyleType: "none" }}>
									<Typography
										variant="h6"
										component="h2"
										textAlign={"center"}>
										<li>Javascript, React, Electron, NodeJs, Dyno, etc.</li>
										<li>Responsive and Fast Web Applications! </li>
										<li>Elegant Websites with beautiful Transitions!</li>
									</Typography>
								</Box>
							</Item>
						</Grid>
						<Grid xs={"auto"}>
							<Item>
								<Box
									id="category-a"
									sx={{ fontSize: "25px", textTransform: "uppercase" }}>
									<u>Data Science and Machine Learning</u>
								</Box>
								<Box
									component="ul"
									aria-labelledby="category-a"
									sx={{ pl: 2, listStyleType: "none" }}>
									<Typography
										variant="h6"
										component="h2"
										textAlign={"center"}>
										<li>
											R,Python, Pandas, NumPy, SciKit, Matplot Lib, Seaborn,
											Tableau,etc.
										</li>
										<li>
											Extremely clean data cleaning,aggregation, and analysis!{" "}
										</li>
										<li>
											Machine Learning Implementation to teach your software to
											learn!
										</li>
									</Typography>
								</Box>
							</Item>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Freelance;
