import { Link } from 'react-router-dom';

const Navbar = () => {
	
	return (
		<nav className="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
					<Link to='/' className="navbar-item">
						Home
					</Link>
					
					<Link to='friends' className="navbar-item">
						Friends
					</Link>
					
					<Link to='search' className="navbar-item">
						Search
					</Link>
					
					<Link to='notifications' className="navbar-item is-size-7">
						Notifications
					</Link>
					
					<Link to='login' className="navbar-item">
						Profile
					</Link>
			</div>
		</nav>
	);
};

export default Navbar;