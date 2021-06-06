import Backgroundlayer from "./Backgroundlayer.jsx";
import Socialmedialinks from "./Socialmedialinks.jsx";
import Typed from "react-typed";
import {NavLink} from "react-router-dom";

function Home(){

	function homeformsubmit(event){
		event.preventDefault();
	}

	return (
		<div className="home" style={{zIndex:5}}>
			<div className="container-fluid homescreen center">
				<Backgroundlayer />
				<div className="container">
					<div className="row">
						<div className="homecontent" style={{zIndex:"100 !important"}}>
							<h1>The name is Bajra.</h1>
							<p>I'm a <Typed loop={true} typeSpeed={40} strings={["web designer", "web developer", "genius"]}/></p>
						</div>
					</div>
					<div className="row" style={{zIndex:3}}>
						<Socialmedialinks />	
						<span style={{zIndex:20}}>
							<NavLink style={{margin:"10px", zIndex:20, display:"inline"}} to="/contact" onSubmit={homeformsubmit}>
								<button style={{zIndex:20}} className="buttons" type="submit">Contact me</button>							
							</NavLink>
							<NavLink style={{margin:"10px", zIndex:20, display:"inline"}} to="/projects" onSubmit={homeformsubmit}>
								<button className="buttons">My Work</button>
							</NavLink>	
						</span>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Home;