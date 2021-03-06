import React from 'react';
import { ConnectedHeader } from "./Components/Header/Header";
import './ReactApp.css';
import { GrcApp } from './AppContext';
import { Footer } from './Components/Footer/Footer';
import "./Styles/AppStyles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from './Components/MainPage/MainPage';
import { RosterPage } from './Components/RosterPage/RosterPage';
import { ConnectedProfilePage } from './Components/ProfilePage/ProfilePage';
import { StaffPage } from './Components/StaffPage/StaffPage';
import { ConnectedRecordsPage } from './Components/Records/RecordsPage';
import { BlogPage } from './Components/Blog/BlogPage';

// http://www.grcrunning.com/uploads/5/6/0/9/5609246/elena-clarendonday2_orig.jpg
// http://www.grcrunning.com/uploads/5/6/0/9/5609246/gw-parkway-grc_orig.jpg

function App() {
	return (
		<div className="App">
			<div className="main-content">
				<GrcApp>
					<ConnectedHeader />
					<Router>
						<Route exact path="/" component={MainPage}/>
						<Route exact path="/roster/:gender" component={RosterPage}/>
						<Route exact path="/profile/:id" component={ConnectedProfilePage} />
						<Route exact path="/staff" component={StaffPage} />
						<Route exact path="/records" component={ConnectedRecordsPage} />
						<Route exact path="/blog" component={BlogPage} />
					</Router>
				</GrcApp>
			</div>
			<Footer />
		</div>
	);
}

export default App;
