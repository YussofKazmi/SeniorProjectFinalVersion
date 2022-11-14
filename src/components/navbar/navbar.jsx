/** @format */

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

/**
 * Component for Displaying Navigation To Different Componenets.
 *
 * @component
 * @example
 *  Uses a Stack React Componenet to Show Different Button Componenets that Each Link to another page
 *  return (
 *   <Navbar />
 * )
 *
 */
const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Stack
				sx={{ padding: "20px", paddingLeft: "40px" }}
				spacing={3}
				direction="row">
				<Link
					style={{ textDecoration: "none" }}
					to="/*">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Home
					</Button>
				</Link>

				<Link
					style={{ textDecoration: "none" }}
					to="/Biography">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						About Me
					</Button>
				</Link>
				<Link
					style={{ textDecoration: "none" }}
					to="/Projects">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Projects
					</Button>
				</Link>
				<Link
					style={{ textDecoration: "none" }}
					to="/Freelance">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Freelance
					</Button>
				</Link>
				<Link
					style={{ textDecoration: "none" }}
					to="/Blogging">
					<Button
						variant="text"
						sx={{ color: "white" }}>
						Blogs
					</Button>
				</Link>
			</Stack>
		</Box>
	);
};

export default Navbar;
