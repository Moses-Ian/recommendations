import React, { useState } from 'react';
import Auth from '../../utils/auth';

const Register = () => {
	
	const [formState, setFormState] = useState({ username: '', email: '', password: '' });
	
	const handleChange = event => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value
		});
	};
	
	const handleFormSubmit = async event => {
		event.preventDefault();
		try {
			// do something
			console.log('submit');
			const response = await fetch('http://localhost:3001/api/user',
				{
					method: 'POST',
					mode: 'cors',
					headers: { 'content-Type': 'application/json' },
					body: JSON.stringify(formState)
				}
			);
			const { token } = await response.json();
			Auth.login(token);
		} catch (e) {
			console.error(e);
		}
	};
	
	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<input
					className='type-box input'
					type='text'
					placeholder='Username'
					name='username'
					onChange={handleChange}
					autoComplete='username'
				></input>
			</div>
			<div>
				<input
					className='type-box input'
					type='email'
					placeholder='Email'
					name='email'
					onChange={handleChange}
					autoComplete='email'
				></input>
			</div>
			<div>
				<input
					className='type-box input'
					type='password'
					placeholder='Password'
					onChange={handleChange}
					autoComplete='new-password'
				></input>
			</div>
			<div>
				<button
					className='button'
					type='submit'
				>
					Sign up
				</button>
			</div>
		</form>
	);
};

export default Register;