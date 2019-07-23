import React from 'react';
import { ConnectedHeader } from "./Components/Header/Header";
import './ReactApp.css';
import { GrcApp } from './AppContext';
import { Carousel } from './Components/Carousel/Carousel';
import { Footer } from './Components/Footer/Footer';
import "./Styles/AppStyles.css";
import { MainPage } from './Components/MainPage/MainPage';

// http://www.grcrunning.com/uploads/5/6/0/9/5609246/elena-clarendonday2_orig.jpg
// http://www.grcrunning.com/uploads/5/6/0/9/5609246/gw-parkway-grc_orig.jpg

function App() {
	return (
		<div className="App">
			<GrcApp>
				<ConnectedHeader />
				<Carousel />
				<MainPage />
				<Footer />
			</GrcApp>
		</div>
	);
}

export default App;
