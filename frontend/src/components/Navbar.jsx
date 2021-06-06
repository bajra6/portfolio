import {NavLink} from "react-router-dom";
import {useState} from "react";

function Navbars(){
	const [collapse, onclick]=useState("");
	let classes="collapse navbar-collapse justify-content-end";
	function alterclasses(){
		document.querySelector(".navbar-collapse").classList.remove("show");
		document.querySelector(".navbar").classList.add("bg-transparent");
		document.querySelector(".navbar").classList.remove("bgblack");
	}
	function makebgblack(){
		document.querySelector(".navbar").classList.add("bgblack");
		document.querySelector(".navbar").classList.remove("bg-transparent");
	}
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-transparent navbarcustom" style={{zIndex:200}}>
		  <div className="container-fluid">
		    <NavLink className="navbar-brand navbarcss" to="/"><i class="fas fa-code"></i></NavLink>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={makebgblack}>
		      <span className=""><i className="fas fa-bars" style={{color:"#0f0", fontSize:"28px"}} /></span>
		    </button>
		    <div className={classes} id="navbarNavAltMarkup">
		      <div className="navbar-nav ">
		        <NavLink className="nav-link navbarcss" onClick={alterclasses} style={{textAlign: "right"}} exact to="/">Home</NavLink>
		        <NavLink className="nav-link navbarcss" onClick={alterclasses} style={{textAlign: "right"}} to="/about">About</NavLink>
		        <NavLink className="nav-link navbarcss" onClick={alterclasses} style={{textAlign: "right"}} to="/projects">Projects</NavLink>
		        <NavLink className="nav-link navbarcss" onClick={alterclasses} style={{textAlign: "right"}} to="/blog">Blog</NavLink>
		        <NavLink className="nav-link navbarcss" onClick={alterclasses} style={{textAlign: "right"}} to="/contact">Contact</NavLink>
		      </div>
		    </div>
		  </div>
		</nav>
		);
}

export default Navbars;