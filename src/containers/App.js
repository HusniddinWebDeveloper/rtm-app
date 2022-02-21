import React from "react";
import Layout from "./Layout";
import {BrowserRouter} from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
			      <Layout />
			    </div>
			</BrowserRouter>
		</Provider>	
  );
}

// https://keenitsolutions.com/products/wordpress/educavo/
export default App;
