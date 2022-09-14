import Login from '../components/Login';
import Register from '../components/Register';

const LoginPage = () => {
	return (
		<>
			<Login />
			<div className='m-6'></div>
			<Register />
		</>
	);
};

export default LoginPage;