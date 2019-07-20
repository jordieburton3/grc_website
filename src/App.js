import React from 'react';
import { ConnectedHeader } from "./Header/Header";
import './ReactApp.css';
import { GrcApp } from './AppContext';
import { Carousel } from './Carousel/Carousel';

// http://www.grcrunning.com/uploads/5/6/0/9/5609246/elena-clarendonday2_orig.jpg
// http://www.grcrunning.com/uploads/5/6/0/9/5609246/gw-parkway-grc_orig.jpg

function App() {
	return (
		<div className="App">
			<GrcApp>
				<ConnectedHeader />
				<Carousel />
			</GrcApp>
		</div>
	);
}

export default App;
