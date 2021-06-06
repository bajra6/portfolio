function Post(params){
	return(
		<div key={params._id} className="myposts container">
			<h3>{params.title}</h3>
			<p>{params.date}</p>
			<p>{params.content}</p>
		</div>
		)
}

export default Post;