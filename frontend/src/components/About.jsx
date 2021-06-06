import Socialmedialinks from "./Socialmedialinks.jsx"
import Typed from "react-typed";
import Skills from "./Skills";

function visible(){
	console.log("triggered")
	document.querySelector(".aboutskills").classList.remove("hidden");
}

function About(){

	return <div className="container" style={{marginTop:"20px"}}>
		<div className="row">
			<div>
				<h4 class='theme'>Hi, I am bajra</h4>
				<Typed  strings={["<h2 style='color:#0f0'>(•_•)<br /></h2>","<h2 style='color:#0f0'>( •_•)>⌐■-■<br /></h2>","<h2 style='color:#0f0'>(⌐■_■)<br/></h2>"]}></Typed>
				<Typed onComplete={visible} startDelay={3000} typeSpeed={10} strings={[
					"<p class='theme'>An alien based in Coimbatore, India who has been learning, practicing and implementing a variety of skills over the last two years while specializing mainly on web design and development.<br> Looking forward to work on interesting projects with amazing people</p>"
					]} >
				</Typed>
			</div>
		</div>
		<div className="aboutskills hidden">
			<Skills />
			<div className="row" style={{marginTop:"20px"}}>
				<div className="col-md-6 theme">
					Reach out to me
				</div>
				<div className="col-md-6">
					<Socialmedialinks/>			
				</div>
			</div>
		</div>
	</div>
}


export default About;