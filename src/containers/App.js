import React, {useEffect} from "react";
import Layout from "./Layout";
import {BrowserRouter} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		AOS.init();
	});
	return (
			<BrowserRouter>
				<div className="App">
				    <Layout />
				</div>
			</BrowserRouter>
			
  );
}

export default App;
