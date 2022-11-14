/** @format */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";

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
 * Component for Every Articles Information.
 *
 * @component
 * @example
 * const articleInfo =  {
 *  articleImage: "Source Url for Article Image",
 *  title: String Title For Article
 *  author: "By Yussof Kazmi",
 *  image: "Source URL For Blog Post Thumbnail"
 *  descrip: "My First Article. Let's see where this goes.",
 *  content: [ Array of Strings, Where Each String is a paragraph 	],
 * }
 *
 *  return (
 *   <Article { articleInfo } />
 * )
 *
 */
const Article = ({ articleInfo }) => {
	return (
		<Grid>
			<Grid
				container
				xs="auto">
				<Grid xs></Grid>
				<Grid xs={"auto"}>
					<Item>
						<img
							src={articleInfo.articleImage}
							alt={"Photo fop Article: " + articleInfo.title}
							loading="lazy"
							width="600"
							height="auto"
						/>
					</Item>
				</Grid>
				<Grid xs></Grid>
			</Grid>
			<Grid
				container
				xs="auto"
				sx={{ margin: "10px" }}>
				<Grid xs></Grid>
				<Grid xs={11}>
					<Typography
						variant="h2"
						component="h2"
						textAlign={"center"}
						sx={{ margin: "auto" }}>
						{articleInfo.title}
					</Typography>
				</Grid>
				<Grid xs></Grid>
			</Grid>

			<Grid>
				<Grid
					container
					spacing={2}>
					<Grid xs></Grid>
					<Grid xs={8}>
						{articleInfo.content.map((paragraph) => (
							<Typography
								key={paragraph}
								variant="h5"
								component="h2"
								textAlign={"center"}
								sx={{ margin: "10px", marginY: "20px" }}>
								{paragraph}
							</Typography>
						))}
					</Grid>
					<Grid xs></Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Article;
