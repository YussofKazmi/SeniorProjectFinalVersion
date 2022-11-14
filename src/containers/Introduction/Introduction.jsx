/** @format */

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import introPhoto from "./introPhoto.PNG";

/**
 * Component for Rendering and Showing Introduction Page.
 *
 * @component
 * Leverages Box and Grid Componenets for layout Orientation, spacing, and margin
 * Uses Typography Componenet to showcase and manipulate text, responsively
 * @example
 *
 *
 *  return (
 *   <Introduction />
 * )
 *
 */
const Introduction = () => {
	return (
		<Box sx={{ margin: "10vh", flexGrow: 1, pointerEvents: "none" }}>
			<Grid
				container
				spacing={1}>
				<Grid xs></Grid>

				<Grid xs={"auto"}>
					<Grid
						item
						container
						direction="row"
						alignItems="center"
						justifyContent="center">
						<Grid
							xs={"auto"}
							sx={{
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Box sx={{ display: "flex" }}>
								<Fade
									in={true}
									appear={true}
									timeout={1500}>
									{
										<img
											style={{ borderRadius: "50%" }}
											src={introPhoto}
											width="350px"
											height="auto"
											alt="ProfileImage"></img>
									}
								</Fade>
							</Box>{" "}
						</Grid>{" "}
					</Grid>

					<Grid xs={12}>
						<Fade
							in={true}
							appear={true}
							timeout={1500}>
							<Typography
								variant="h3"
								component="h3"
								textAlign={"center"}
								sx={{ marginTop: "30px" }}>
								Nice to Meet You, I'm Yussof
							</Typography>
						</Fade>

						<Fade
							in={true}
							appear={true}
							timeout={1500}>
							<Typography
								sx={{ marginTop: "20px" }}
								variant="h4"
								component="h4">
								I Want to Help You Build Your Dreams. One Line of Code At a
								Time.
							</Typography>
						</Fade>
					</Grid>
				</Grid>
				<Grid xs></Grid>
			</Grid>
			<Grid
				container
				spacing={3}>
				<Grid xs></Grid>

				<Grid xs></Grid>
			</Grid>
		</Box>
	);
};

export default Introduction;
