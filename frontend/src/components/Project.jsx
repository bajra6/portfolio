import {useState} from "react";

function Project(props){
		return <div className="row project">
			<div className="col-md-6">
				<u className="theme">{props.title}</u>
				<p className="theme">{props.content}</p>
			</div>
			<div className="col-md-6">
				<div className="theme weblink">
			    	<a target="_blank" rel="noopener noreferrer" href={props.link}><img src={props.img.default} width="100%"/></a>
				</div>
			</div> 
		</div>
}

export default Project;