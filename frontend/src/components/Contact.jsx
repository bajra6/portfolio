import {useState} from "react";
import axios from "axios";

function Contact(){


	const [inputs,setvalue]=useState({
		name:"",
		email:"",
		message:""
	});

	function formsubmit(event){

		let config = {
               headers: {
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-Type': 'application/json'
               } 
          }
		event.preventDefault();
		// console.log(inputs);

		axios.post('/', inputs, config)

		setvalue({
			name:"",
			email:"",
			message:""
		})

		alert("Message sent. Have a great day")
		
	}

	function handlechange(event){
		setvalue({...inputs,[event.target.name]:event.target.value})
	}

	return <div className="center" style={{width:"99vw",height:"100vh", overflowX:"hidden", margin:0}}>
		<div className="container">
			<div className="row">
				<div className="col-md-6 theme contactme">
					<div>
						<h2 >Contact me</h2>
						<p>and probably become the greatest human to have ever existed on mother earth</p>
					</div>
				</div>
				<div className="col-md-6">
					<form onSubmit={formsubmit} method="POST">
						<div><input style={{height:"2.5em"}} className="forminputs" autoComplete="off" name="name" value={inputs.name} onChange={handlechange} type="text" placeholder="Name" /></div>
						<div><input style={{height:"2.5em"}} className="forminputs" autoComplete="off" name="email" value={inputs.email} onChange={handlechange} type="text" placeholder="Email" /></div>
						<div><textarea rows="5" className="forminputs" autoComplete="off" name="message"value={inputs.message} onChange={handlechange} placeholder="Your Message"/></div>
						<button type="submit" className="buttons">Send</button>
					</form>
				</div>
			</div>			
		</div>
	</div>
}

export default Contact;