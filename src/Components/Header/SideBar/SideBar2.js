import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import SideBar1 from "./SideBar1";

function SideBar2() {
return (
	<Router>
	<SideBar1/>
	<Routes>
		<Route path="/movies" exact  />
		<Route path="/movies/popular" exact/>
		<Route path="/movies/top-rated" exact  />
		<Route path="/movies/upcoming" exact/>
		<Route path="/movies/now-playing" exact  />
		<Route path="/tv" exact />
		<Route path="/tv/popular" exact/>
		<Route path="/tv/top-rated" exact  />
		<Route path="/tv/on-tv" exact/>
		<Route path="/tv/airing" exact  />
		<Route path="/services/services1" exact  />
		<Route path="/services/services2" exact />
		<Route path="/services/services3" exact  />
		<Route path="/contact" exact />
		<Route path="/events" exact />
		<Route path="/events/events1" exact  />
		<Route path="/events/events2" exact  />
		<Route path="/support" exact />
	</Routes>
	</Router>
);
}

export default SideBar2;
