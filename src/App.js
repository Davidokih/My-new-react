import React from "react";
import HeaderComp from "./components/Header/HeaderComp"
import Section1 from "./components/HomeScreen/Sections/Section1"
import Logos from "./components/HomeScreen/Sections/Logos"
import Section2 from "./components/HomeScreen/Sections/Section2";
import Section4 from "./components/HomeScreen/Sections/Section4"
import Section5 from "./components/HomeScreen/Sections/Section5"
import Section6 from "./components/HomeScreen/Sections/Section6";

const App = () => {
	return (
		<div>
			<HeaderComp />
			<Section1 />
			<Logos />
			<Section2 />

			<Section4 />
			<Section5 />
			<Section6 />
		</div>
	);
};

export default App;
















