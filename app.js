const express = require("express");
const bodyp = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "", {useNewUrlParser: true, useUnifiedTopology: true });

const messageSchema = {
	name:String,
	email:String,
	message:String
};

const blogSchema = {
	title:String,
	date:String,
	content:String
}

const Blog = mongoose.model("Blog", blogSchema);
const Message = mongoose.model("Message", messageSchema);

const app = express();
app.use(cors());
app.use(bodyp.urlencoded({extended: true}));

app.use(bodyp.json());

app.listen(process.env.PORT || 3002, function(req, res){
	console.log("listening on 3002");
});



// Blog.find({},(err,docs) => (console.log(docs)))


app.get("/request", function(req, res){
	console.log("get vanchu gethu");
	Blog.find({},(err,docs) => res.send(docs))
});

app.post("/contact", function(req, res){
	res.redirect("/contact");
});

app.post("/projects", function(req, res){
	res.redirect("/projects");
});

app.post("/", function(req, res){
	console.log(req.body)
	let message = {name:req.body.name, email:req.body.email, message:req.body.message};
	console.log(message)
	Message.insertMany([message]);
	res.redirect("/")
});

if (process.env.NODE_ENV == "production"){
	 app.use(express.static('frontend/build'));
}