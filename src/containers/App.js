import React from "react";
import Layout from "./Layout";
import {BrowserRouter} from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
					<div className="App">
				      <Layout />
				    </div>
			</Provider>	
		</BrowserRouter>
  );
}

export default App;
