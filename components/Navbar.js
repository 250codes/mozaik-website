import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import log from "../images/logo.png";
function Navbar() {
	//navbar scroll when active state
	const [navbar, setNavbar] = useState(false);
	//navbar scroll changeBackground function
	const changeBackground = () => {
		// console.log(window.scrollY);
		if (window.scrollY > 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	useEffect(() => {
		changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	});
	return (
		<header
			className={
				navbar
					? "fixed-top d-flex align-items-center header-scrolled"
					: "'fixed-top d-flex align-items-center header-transparent'"
			}>
			<div id='navbar' className='navbar-area'>
				<div className='main-nav'>
					<div className='container-fluid'>
						<nav className='navbar navbar-expand-md navbar-light'>
							<Link className='navbar-brand' href='/'>
								<Image
									src={log}
									alt='logo'
									width='100'
									height='64'
									className='main-logo'
								/>
							</Link>
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
										<Link className='nav-link' href='/'>
											Home
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' href='about'>
											About Us
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link ' href='projectManagment'>
											Projects
										</Link>
										<ul className='dropdown-menu'>
											<li>
												<Link className='nav-link' href='projectManagement'>
													Project Managment
												</Link>
											</li>
											<li className='nav-item'>Consultation</li>
											<ul className='nav-item dropdown-menu'>
												<li className='dropdown-item'>
													<Link className='nav-link' href='productDesign'>
														Product Design
													</Link>
												</li>
												<li className='dropdown-item'>
													<Link className='nav-link' href='conceptCreation'>
														Concept Creation
													</Link>
												</li>
												<li className='dropdown-item'>
													<Link className='nav-link' href='3Dvisuals'>
														3D visuals
													</Link>
												</li>
												<li className='dropdown-item'>
													<Link className='nav-link' href='moodBoard'>
														Mood Board
													</Link>
												</li>
											</ul>
										</ul>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' href='contact'>
											Contact
										</Link>
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
