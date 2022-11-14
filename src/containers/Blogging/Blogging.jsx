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
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { useState } from "react";
import Article from "../../components/article/Article.jsx";

/**
 * Component for Containing and Rendering Blogging Articles
 *
 * @component
 * Utilizes Article Componenet and DisplayArticlesCard Componenet to show different Articles
 *  through on click Events
 * @example
 
 *  return (
 *   <Blogging />
 * )
 *
 */
const Blogging = () => {
	return (
		<Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
			<Grid
				container
				spacing={1}
				sx={{ margin: "10px", marginBottom: "50px" }}>
				<Grid xs> </Grid>

				<Grid xs={9}>
					<Box sx={{ width: "100%" }}>
						<Stack spacing={1}>
							<Fade
								in={true}
								appear={true}
								timeout={1000}
								orientation="horizontal">
								<Typography
									sx={{ marginTop: "20px", marginBottom: "10px" }}
									variant="h4"
									component="h4">
									The Inner-Monologue Stuff. Have Fun!
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

							<DisplayArticlesCard
								key={"What Is Art to You? For me, it's the 1s and 0s"}
								info={{
									title: "What Is Art to You? For me, it's the 1s and 0s",
									author: "By Yussof Kazmi",
									image:
										"https://staticc.sportskeeda.com/editor/2022/01/52a1e-16422627680415-1920.jpg",
									descrip: "My First Article. Let's see where this goes.",
									content: [
										"My name is Yussof, and I love creating art but not your typical version of art, in fact, I am pretty bad at painting, coloring, and all that fun stuff. Rather, I love programming, and creating pieces of software that help people accomplish their dreams. Ever since I was a kid, I loved Art, but to be honest, I would get the worst grades in art until I learned to expand my horizons and see that there is a lot more to art than painting or coloring or sculpting.",
										"In my free time, I love working out, hanging out with my friends, and doing anything that sounds fun, albeit, I do that sometimes without thinking haha.During the day, I am a software engineer and a Masters in Data Science student, and I absolutely it. I love being able to be given free reign on how to create something, and then following through with it, through enormous amounts of trial and error, the end result is always worth it. The idea of being able to program and create something out of nothing that provides functionality is still something I am both amazed and perplexed by. I remember when someone said their own unorthodox form of art was “akin to painting a masterpiece on thin air without a canvas”.",
										"This is where I want to come in, and provide to you, my art. I want to be able to help you build your dreams and paint the picture you really want, by combining your goals with my programming toolset, and together we can make a masterpiece worth bringing to life. ",
										"I know what it is like to want to make something, but struggle with where to start, how to start, and after enough time, why to even start. However, it was moments like that, that  helped me with learning the need for patience, and perspective when creating something, whether it is on a physical canvas with elegant tools, or screen of vivid colors and animations through the forms of 1s and 0s.",
										"Feel free to check out my projects section, and then connect with me on my freelance section, and I am sure we can work something out!",
									],
									articleImage:
										"https://pbs.twimg.com/media/FKGibnyVUAUQY7r.jpg",
								}}></DisplayArticlesCard>
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
 * Component for Rendering and Displaying Articles Depending on On-Click Event
 *
 * @component
 *  THrough Boolean Logic in html, allows react to render an article Componenet for any specific article clicked on,
 * then allows that person to go back to the list of articles just by clicking again
 * @example
 
 *  return (
 *   <DisplayArticlesCard { info } />
 * )
 *
 */
function DisplayArticlesCard({ info }) {
	const [displayArticle, setdisplayArticle] = useState(false);

	/**
  @function
 * Function for Rendering Article Componenets by allowing state change of Boolean displayArticle componenet.
 * Everytime this function is triggered, the component will re-render and show the article or not depending ont he bool value
 */
	const showArticle = function () {
		setdisplayArticle(!displayArticle);
	};

	return (
		<Fade
			in={true}
			appear={true}
			timeout={3000}
			orientation="horizontal">
			<CardActionArea onClick={showArticle}>
				{displayArticle ? (
					<Article articleInfo={info}></Article>
				) : (
					<div>
						<Card
							sx={{
								display: "flex",
								backgroundColor: "black",
								color: "white",
							}}>
							<CardMedia
								component="img"
								sx={{ width: "auto" }}
								image={info.image}
								alt="Article Image"
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									margin: "auto",
								}}>
								<CardContent
									sx={{ flex: "1 0 auto", color: "white", margin: "auto" }}>
									<Typography
										variant="h4"
										component="h4">
										{/* sx={{ fontSize: "45px" }}> */}
										{info.title}
									</Typography>
									<Typography
										variant="subtitle1"
										color="white"
										component="div">
										{info.descrip}
									</Typography>
								</CardContent>
							</Box>
						</Card>
					</div>
				)}
			</CardActionArea>
		</Fade>
	);
}

export default Blogging;
