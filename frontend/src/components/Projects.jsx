import Project from "./Project.jsx";

function Projects(){
	return <div className="container">
		<h5 className="theme" style={{margin:"36px auto"}}>Intergalactic projects I've worked on</h5>		
			<Project title="Archer Events" content="An Event management company based in Coimbatore" link="http://www.archerevents.in" img={require("./archers.png")}/>
			<Project title="TopSea" content="A grocery-to-home delivery company" link="https://bajra6.github.io/adityayadav/" img={require("./topsea.png")} />
			<Project title="Shine Industry" content="Paper and non-woven bags manufacturer based in Madras" link="https://shineindustry.in" img={require("./shine.png")}/>
	</div>
}

export default Projects;