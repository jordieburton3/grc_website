import React from 'react';
import { ConnectedHeader } from "./Header/Header";
import './ReactApp.css';
import { GrcApp } from './AppContext';
import { Carousel } from './Carousel/Carousel';
import { Footer } from './Footer/Footer';
import "./Styles/AppStyles.css";

// http://www.grcrunning.com/uploads/5/6/0/9/5609246/elena-clarendonday2_orig.jpg
// http://www.grcrunning.com/uploads/5/6/0/9/5609246/gw-parkway-grc_orig.jpg

function App() {
	return (
		<div className="App">
			<GrcApp>
				<ConnectedHeader />
				<Carousel />
				<div className="main-page__into-text">
					<div className="main-page__mission-title">Empowering athletes. Fostering community.</div>
					<div className="main-page__mission-subtext">Enriching the lives of post-collegiate athletes while serving the community.</div>
				</div>
				<Footer />
			</GrcApp>
		</div>
	);
}

export default App;
