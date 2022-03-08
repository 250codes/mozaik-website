import React from "react";
import Image from "next/image";
import log from "../images/logo.png";
function Navbar() {
	return (
		<header>
			<div id='navbar' className='navbar-area'>
				<div className='main-nav'>
					<div className='container-fluid'>
						<nav className='navbar navbar-expand-md navbar-light'>
							<a className='navbar-brand' href='index.htm'>
								<Image
									src={log}
									alt='logo'
									width='100'
									height='64'
									className='main-logo'
								/>
								
							</a>
							<button
								className='navbar-toggler navbar-toggler-right collapsed'
								type='button'
								data-toggle='collapse'
								data-target='#navbarSupportedContent'
								aria-controls='navbarSupportedContent'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='icon-bar top-bar'></span>
								<span className='icon-bar middle-bar'></span>
								<span className='icon-bar bottom-bar'></span>
							</button>
							<div
								className='collapse navbar-collapse'
								id='navbarSupportedContent'>
								<ul className='navbar-nav'>
									<li className='nav-item'>
										<a className='nav-link' href='index.htm#'>
											Home <i className='fas fa-chevron-down'></i>
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link' href='about'>
											About Us <i className='fas fa-chevron-down'></i>
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link' href='index.htm#'>
											Projects <i className='fas fa-chevron-down'></i>
										</a>
										<ul className='dropdown-menu'>
											<li className='nav-item'>
												<a className='nav-link' href='projects.html'>
													Projects
												</a>
											</li>
											<li className='nav-item'>
												<a className='nav-link' href='projects-details.html'>
													Projects Details
												</a>
											</li>
										</ul>
									</li>
									<li className='nav-item'>
										<a className='nav-link' href='contact.html'>
											Contact
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
