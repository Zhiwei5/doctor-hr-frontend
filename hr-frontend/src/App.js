import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import EmailField from './doctor.js';
import TextField from './TextField.js';




var styles = {
	"appBarStyle": {
		"marginBottom": "10px",
	}
}

class App extends React.Component {
  // One thing every component must do: 
  // define the render method
  // (this defines the view of the component)
  render() {
    return (
      <div>
	    <AppBar position="static" style={styles.appBarStyle}>
			<Toolbar>
				<Typography variant="title" color="inherit">
					React Assignment	
				</Typography>
			</Toolbar>
		</AppBar>
		<EmailField />
    <TextField />
      </div>
    );
  }
}

export default App;
