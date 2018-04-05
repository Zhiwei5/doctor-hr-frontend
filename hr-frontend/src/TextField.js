import axios from 'axios';
import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class TextFieldExample extends React.Component {
	constructor() {
		super();
		this.state = {
			"nameTextField": "", // This is where the content for the TextField used below is stored 
		}
	}

	onNameTextFieldChange = (event) => {
		// Update the nameTextField state whenever the text field is changed or perturbed in any way:
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		axios.get("http://127.0.0.1:5000/api/heart_rate/" + this.state.nameTextField).then( (response) => { 
			console.log(response.status); 
            this.setState({"HeartRate": response.data["heart_rate"],
            "Time": response.data["time"]}); 
		});
	}

	render() {
		return (
			<div>
				<TextField 
					value={this.state.nameTextField}
					onChange={this.onNameTextFieldChange}/>
				<Button onClick={this.onButtonClick}>
					Fetch data from server
				</Button>
				{this.state.HeartRate /*show the current nameTextField state here in the browser */} 
                {this.state.Time /*show the current nameTextField state here in the browser */} 
			</div>
		);
	}
}

export default TextFieldExample;