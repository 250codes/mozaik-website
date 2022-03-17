import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import log from "../images/Mozaik.png";
function Navbar() {
	const [mobile, setMobile] = useState(false);
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
			id='header'
			className={
				navbar
					? "fixed-top d-flex  align-items-center header-scrolled "
					: "fixed-top d-flex align-items-center header-transparent"
			}>
			<div className='container d-flex justify-content-between align-items-center  w-100'>
				<div>
					<h1 className='logo me-auto'>
						<Image
							src={log}
							width={200}
							height={100}
							className='main-logo'
							alt='logg'
						/>
					</h1>
				</div>

				{/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}

				<nav
					id='navbar'
					className={
						mobile
							? "navbar order-last order-lg-0 navbar-mobile"
							: "navbar order-last order-lg-0"
					}>
					<ul>
						<li>
							<Link className='nav-link scrollto active link-warning' href='/'>
								Home
							</Link>
						</li>
						<li>
							<Link className='nav-link scrollto' href='about'>
								About
							</Link>
						</li>

						<li className='dropdown'>
							<a href='#'>
								<span>Projects</span> <i className='bi bi-chevron-down'></i>
							</a>
							<ul>
								<li>
									<a href='projectManagement'>Projects Management </a>
								</li>
								<li className='dropdown'>
									<a href='#'>
										<span>Consultation</span>{" "}
										<i className='bi bi-chevron-right'></i>
									</a>
									<ul>
										<li>
											<Link className='nav-link' href='productDesign'>
												Product Design
											</Link>
										</li>
										<li>
											<Link className='nav-link' href='conceptCreation'>
												Concept Creation
											</Link>
										</li>
										<li>
											<Link className='nav-link' href='3Dvisuals'>
												3D visuals
											</Link>
										</li>
										<li>
											<Link className='nav-link' href='moodBoard'>
												Mood Board
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a className='nav-link scrollto' href='contact'>
								Contact
							</a>
						</li>
					</ul>
					<i
						className={
							mobile
								? "bi bi-list mobile-nav-toggle bi-x"
								: "bi bi-list mobile-nav-toggle"
						}
						onClick={() => setMobile(!mobile)}></i>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
