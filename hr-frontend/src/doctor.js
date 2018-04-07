import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class EmailField extends React.Component {
	constructor() {
		super();
		this.state = {
			"EmailField": "",
			"Heading" : ["Heart Rate","Time"],
			"HeartRate": []
		};
	}

	onEmailFieldChange = (event) => {
		this.setState({"EmailField": event.target.value});
	}

	onButtonClick = (event) => {
		axios.get("http://127.0.0.1:5000/api/heart_rate/" + this.state.EmailField).then( (response) => { 
			console.log(response.status); 
			this.setState({"HeartRate": response.data}); 
			console.log(this.state.HeartRate);
		});
	}

	generateTableDataForLoop = () => {
				var prettyTableData = [];
				if (this.state.HeartRate != 0)
					for (var i = 0; i < this.state.HeartRate.length; i++) {
						prettyTableData.push(
							<TableRow>
								<TableCell> {this.state.HeartRate[i][0]} </TableCell>
								<TableCell> {this.state.HeartRate[i][1]} </TableCell>
							</TableRow>
						);
					}
		
					return prettyTableData;
		
			}
		

	render() {
		var prettyTableData = this.generateTableDataForLoop();
		//var prettyTableData = [];
		return (
			<div>
				<TextField 
					value={this.state.EmailField}
					onChange={this.onEmailFieldChange}/>
				<Button onClick={this.onButtonClick}>
					Fetch Data From Web
				</Button>
				<Table>
 					<TableHead>
 						<TableRow>
 							<TableCell> {this.state.Heading[0]} </TableCell>
 							<TableCell> {this.state.Heading[1]} </TableCell>
 						</TableRow>
 					</TableHead>
 					{/*Heart Rate and Time */}
 					{prettyTableData}	
 				</Table>
			</div>
			);
		}
	}

	export default EmailField;