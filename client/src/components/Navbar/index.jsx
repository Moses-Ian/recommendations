const Navbar = () => {
	
	return (
		<nav className="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
					<a className="navbar-item">
						Friends
					</a>
					
					<a className="navbar-item">
						Chat
					</a>
					
					<div className="navbar-item has-dropdown has-dropdown-up is-hoverable">
						<a className="navbar-link is-arrowless">
							Menu
						</a>
						
						<div className="navbar-dropdown is-size-7">
							<a className="navbar-item p-0">
								Thing 1
							</a>
							<a className="navbar-item p-0">
								Thing 2
							</a>
							<a className="navbar-item p-0">
								Thing 3
							</a>
						</div>
					</div>
						
					<a className="navbar-item">
						Search
					</a>
					
					<a className="navbar-item">
						Profile
					</a>
			</div>
		</nav>
	);
};

export default Navbar;