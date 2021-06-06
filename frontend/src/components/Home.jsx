import Backgroundlayer from "./Backgroundlayer.jsx";
import Socialmedialinks from "./Socialmedialinks.jsx";
import Typed from "react-typed";

function Home(){
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
							<form style={{margin:"10px", zIndex:20, display:"inline"}} action="/contact">
								<button style={{zIndex:20}} className="buttons" type="submit">Contact me</button>							
							</form>
							<form style={{margin:"10px", zIndex:20, display:"inline"}} action="/projects">
								<button className="buttons">My Work</button>
							</form>	
						</span>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Home;