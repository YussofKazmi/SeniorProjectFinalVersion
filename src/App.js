/** @format */

import React from "react";
import { render } from "react-dom";
import {
	BrowserRouter,
	Route,
	Routes,
	RouteMatch,
	Switch,
} from "react-router-dom";
import { Navbar } from "./components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Unstable_Grid2";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {
	Introduction,
	Biography,
	Projects,
	Blogging,
	Freelance,
} from "./containers";

/**
 * @component
 *
 * Renders, stores, and displays all React Container Componenets Responsible for each page of website
 * Leverages Box and Grid Componenets for layout Orientation, spacing, and margin
 * Uses Typography Componenet to showcase and manipulate text, responsively
 * @example
 
 *  return (
 *   <App />
 * )
 *
 */
const App = () => {
	return (
		<Grid
			xs={12}
			sx={{
				fontFamily: "sans-serif",

				color: "white",
			}}>
			<div>
				<Navbar></Navbar>
			</div>

			<Routes>
				<Route
					path="/*"
					element={<Introduction />}
				/>
				<Route
					path="/Biography"
					element={<Biography />}
				/>
				<Route
					path="/Projects"
					element={<Projects />}
				/>
				{/* <Route path='/Skills' element={< />} /> */}
				<Route
					path="/Freelance"
					element={<Freelance />}
				/>
				<Route
					path="/Blogging"
					element={<Blogging />}
				/>
			</Routes>
		</Grid>
	);
};

export default App;
