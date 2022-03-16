import React, {useEffect} from "react";
import Layout from "./Layout";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import AOS from 'aos';
import 'aos/dist/aos.css';

const history = createBrowserHistory({ window });

function App() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<HistoryRouter history={history}>
			<div className="App">
			    <Layout />
			</div>
		</HistoryRouter >
  );
}
export default App;
