/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
/**
 *@Function
 *
 * For Creating an All Black Background Theme from MUI Library
 *
 *
 *
 */
const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

/**
 * @Function
 * FunctionS for Rendering APP Component
 *  which is central Container for All of Website onto the root element of index.html
 *
 * @example
 
 *  return (
 *   <Projects />
 * )
 *
 */
ReactDOM.render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CssBaseline>
	</ThemeProvider>,

	document.getElementById("root")
);
