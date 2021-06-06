import Post from "./Post.jsx";
import axios from "axios";
import {useState, useEffect} from "react";

function Blog(){

	const [posts,addposts] = useState([])

	useEffect(()=>{
		axios.get('/request').then((responses) => {
		addposts(responses.data)
		}).catch((error)=>console.log("varala"));
	}, []);

	return (
		<div className="blogscreen" style={{color:"white"}}>
				<div className="container">
				<h1 className="myposts container">Blog</h1>
				{posts.reverse().map((post) => (<Post title={post.title} content={post.content} date={post.date}/>))}
			</div>
		</div>
	);
}

export default Blog;