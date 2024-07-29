import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function HeaderComponent() {
	const authContext = useAuth();

	const isAuthenticated = authContext.isAuthenticated;

    function handleLogout() {
        authContext.logout();
    }

	//console.log(authContext);
	return (
		<header className='border-bottom border-light border-5 mb-5 p-2'>
			<div className='container'>
				<div className='row'>
					<nav className='navbar navbar-expand-lg'>
						<a
							className='navbar-brand ms-2 fs-2 fw-bold text-black'
							href='https://www.github.com/AGEDF'
						>
							Aadam
						</a>
						<div className='collapse navbar-collapse'>
							<ul className='navbar-nav'>
								<li className='nav-item fs-5'>
									{isAuthenticated && (
										<Link className='nav-link' to='/welcome/Aadam'>
											Home
										</Link>
									)}
								</li>
								<li className='nav-item fs-5'>
									{isAuthenticated && (
										<Link className='nav-link' to='/todos'>
											Todos
										</Link>
									)}
								</li>
							</ul>
						</div>
						<ul className='navbar-nav'>
							<li className='nav-item fs-5'>
								{!isAuthenticated && (
									<Link className='nav-link' to='/login'>
										Login
									</Link>
								)}
							</li>
							{isAuthenticated && (
								<li className='nav-item fs-5'>
									<Link className='nav-link' to='/logout' onClick={handleLogout}>
										Logout
									</Link>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
export default HeaderComponent;
