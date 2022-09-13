import { Link } from 'react-router-dom';

const Navbar = () => {
	
	return (
		<nav className="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
					<Link to='friends' className="navbar-item">
						Friends
					</Link>
					
					<Link to='chat' className="navbar-item">
						Chat
					</Link>
					
					<div className="navbar-item has-dropdown has-dropdown-up is-hoverable">
						<a className="navbar-link is-arrowless">
							Menu
						</a>
						
						<div className="navbar-dropdown is-size-7">
							<Link to='thing1' className="navbar-item p-0">
								Thing 1
							</Link>
							<Link to='thing2' className="navbar-item p-0">
								Thing 2
							</Link>
							<Link to='thing3' className="navbar-item p-0">
								Thing 3
							</Link>
						</div>
					</div>
						
					<Link to='search' className="navbar-item">
						Search
					</Link>
					
					<Link to='login' className="navbar-item">
						Profile
					</Link>
			</div>
		</nav>
	);
};

export default Navbar;