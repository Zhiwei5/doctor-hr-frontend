import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class EmailField extends React.Component {
	constructor() {
		super();
		this.state = {
			"EmailField": "", 
		};
	}

	onEmailFieldChange = (event) => {
		this.setState({"EmailField": event.target.value});
	}

	onButtonClick = (event) => {
		axios.get("http://127.0.0.1:5000/api/heart_rate/" + this.state.EmailField).then( (response) => { 
			console.log(response.status); 
			this.setState({"HeartRate": response.data}); 
		});
	}

	render() {
		return (
			<div>
				<TextField 
					value={this.state.EmailField}
					onChange={this.onNameTextFieldChange}/>
				<Button onClick={this.onButtonClick}>
					Fetch Data From Web
				</Button>
					{this.state.HeartRate}
			</div>
			);
		}
	}

	export default EmailField;