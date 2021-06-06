import Navbar from "./components/Navbar.jsx";
import {Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";

function App(){
	return (
		<div>
			<Navbar />
			
			<Route exact path="/">
				<Home />
			</Route>

			<Route path="/about">
				<About />
			</Route>

			<Route path="/projects">
				<Projects />
			</Route>

			<Route path="/blog">
				<Blog />
			</Route>

			<Route path="/contact">
				<Contact />
			</Route>
		</div>
		)	
}

export default App;
