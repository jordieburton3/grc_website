import React from 'react';
import { ConnectedHeader } from "./Header/Header";
import './ReactApp.css';
import { GrcApp } from './AppContext';

function App() {
	return (
		<div className="App">
			<GrcApp>
				<ConnectedHeader />
			</GrcApp>
		</div>
	);
}

export default App;
