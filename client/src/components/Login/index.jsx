import React, { useState } from 'react';
import Auth from '../../utils/auth';

const Login = () => {
	
	const [formState, setFormState] = useState({email: '',	password: ''});
	
	const handleChange = event => {
		const {name, value} = event.target;
		setFormState({
			...formState,
			[name]: value
		});
	};
	
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			// login
			const response = await fetch('http://localhost:3001/api/user/login',
				{
					method: 'POST',
					mode: 'cors',
					headers: { 'content-Type': 'application/json' },
					body: JSON.stringify(formState)
				}
			);
			const { token } = await response.json();
			Auth.login(token);
			console.log('success');
		} catch (e) {
			console.log(e);
		}
	};
	
	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<input
					autoFocus
					className="type-box input"
					type="email"
					placeholder="email"
					name="email"
					onChange={handleChange}
					autoComplete="email"
				></input>
			</div>
			<div>
				<input
					className="type-box input"
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
					autoComplete="current-password"
				></input>
			</div>
			<div>
				<button 
					className='button'
					type="submit"
				>
					Log in
				</button>
			</div>
		</form>
	);
};

export default Login;