import React, { useState } from 'react';
import { TextField, Button, Typography, Divider, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ForwardIcon from '@material-ui/icons/Forward';



const nameRegex = RegExp(/^[a-zA-Z\s]{3,15}$/);
const emailRegex = RegExp(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
const phoneRegex = RegExp(/^([0][4|5][0-9]{1})[-\s]?([0-9]{3}[-\s]?[0-9]{4})$/);
const msgRegex = RegExp(/^[a-zA-Z0-9\s.]{3,250}$/);

const PersonalInfo = () => {
    const classes = useStyles();
	const [state,setState] = useState({
		messages: [],
		message: {
			firstName: '',
			lastName:'',
			email: '',
			phone: '',
			company:'',
			message: '',
		},
		formErrors: {
			lastName:'',
			firstName: '',
			email: '',
			phone: '',
			company:'',
			message: '',
		},
		checked: false,
	})
	
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		let formErrors = { ...state.formErrors };

		switch (name) {
			case 'firstName':
				formErrors.firstName = nameRegex.test(value);
				break;
			case 'lastName':
				formErrors.lastName = nameRegex.test(value);
				break;
			case 'email':
				formErrors.email = emailRegex.test(value);
				break;
			case 'phone':
				formErrors.phone = phoneRegex.test(value);
				break;
			case 'company':
				formErrors.company = nameRegex.test(value);
				break; 
			case 'message':
				formErrors.message = msgRegex.test(value);
				break;
			default:
				break;
		}


		setState({
			...state,
			message: {
				...state.message,
				[name]: value,
			},
			formErrors: formErrors,
		});
	};

	const handleCheck = name => event =>{
		setState({ ...state, [name]: event.target.checked });
	}

	const { message: { firstName, lastName, email, phone, company, message }, formErrors, checked } = state;
		return (
			<form className={classes.container}>
				<Typography variant="h5">Personal Information</Typography>
				<Divider style={{marginBottom:10}}/>
				<TextField
					label="What's Your First Name"
					className={classes.textField}
					type="text"
					name="firstName"
					value={firstName}
					onChange={handleChange}
					autoComplete="firstName"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.firstName === false ? (
					<Typography variant="caption" color="error">
						between 3 to 15 letters are valid! *
					</Typography>
				) : null}
				<TextField
					label="What's Your Last Name"
					className={classes.textField}
					type="text"
					name="lastName"
					value={lastName}
					onChange={handleChange}
					autoComplete="lastName"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.lastName === false ? (
					<Typography variant="caption" color="error">
						between 3 to 15 letters are valid! *
					</Typography>
				) : null}
				<TextField
					label="Your Email ID"
					className={classes.textField}
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					autoComplete="email"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.email === false ? (
					<Typography variant="caption" color="error">
						your email ID is not valid! *
					</Typography>
				) : null}
				<TextField
					label="Phone"
					className={classes.textField}
					type="number"
					name="phone"
					value={phone}
					onChange={handleChange}
					autoComplete="phone"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.phone === false ? (
					<Typography variant="caption" color="error">
						just finnish mobile number valid! *
					</Typography>
				) : null}
				<TextField
					label="What's Your Company"
					className={classes.textField}
					type="text"
					name="company"
					value={company}
					onChange={handleChange}
					autoComplete="company"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.company === false ? (
					<Typography variant="caption" color="error">
						between 3 to 15 letters are valid! *
					</Typography>
				) : null}
				<TextField
					label="Leave Me a Message here"
					multiline
					rows="4"
					name="message"
					value={message}
					onChange={handleChange}
					className={classes.textField}
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.message === false ? (
					<Typography variant="caption" color="error">
						between 3 to 250 characters valid!
					</Typography>
				) : null}
				<FormControlLabel
        			control={
          				<Checkbox checked={checked} onChange={handleCheck('checked')} value={checked} name="checked" color="secondary" />
        			}
        		label="agree to Terms."
      			/>
				<Button
					type="submit"
					value="Continue"
					// onClick={handleSubmit}
					disabled={ !checked ||  !formErrors.firstName || !formErrors.lastName || !formErrors.company || !formErrors.email || !formErrors.message}
					variant="contained"
					color="primary"
					fullWidth
					className={classes.button}
				>
					Continue
					<ForwardIcon className={classes.rightIcon} />
				</Button>
			</form>
		);
	
}

export default PersonalInfo;


const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		minWidth: '40%',
		[theme.breakpoints.down('sm')]: {
			minWidth: '70%',
		},
	},
	textField: {
		fontFamily: 'Handlee, Sans Serif, Arial',
		fontSize: '1.5rem',
	},
	rightIcon: {
		marginLeft: theme.spacing(2),
	},
}));