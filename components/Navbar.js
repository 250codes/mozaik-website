import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import log from "../public/images/logoDark.png";
function Navbar() {
	const [dropDown, setDropDown] = useState(false);
	const [deepdropDown, setDeepDropDown] = useState(false);
	const [deep2dropDown, setDeep2DropDown] = useState(false);
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

	const handeClose = () => {
		setMobile(false);
		setDeepDropDown(false);
		setDropDown(false);
	};

	return (
		<header
			id='header'
			className={
				navbar
					? "fixed-top d-flex  align-items-center header-scrolled "
					: "fixed-top d-flex align-items-center header-transparent"
			}>
			<div className='container d-flex justify-content-between align-items-center  w-100'>
				<div style={{ cursor: "pointer" }}>
					<Link href='/'>
						<Image src={log} width='100px' height='100px' alt='logg' />
					</Link>
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
						<li onClick={() => setMobile(false)}>
							<Link className='nav-link scrollto' href='about'>
								About
							</Link>
						</li>

						<li className='dropdown'>
							<a href='consultancy' onMouseEnter={() => setDropDown(!dropDown)}>
								<span>Services</span> <i className='bi bi-chevron-down'></i>
							</a>
							<ul className={dropDown ? "dropdown-active" : ""}>
								<li className='dropdown'>
									<a href='consultancy'>
										<span onClick={() => setDeepDropDown(!deepdropDown)}>
											Consultancy and Conceptualisation
										</span>{" "}
										<i className='bi bi-chevron-right'></i>
									</a>
									<ul className={deepdropDown ? "dropdown-active" : ""}>
										<li onClick={() => handeClose()}>
											<Link className='nav-link' href='consultancy'>
												Consultancy
											</Link>
										</li>
										<li onClick={() => handeClose()}>
											<Link className='nav-link' href='design'>
												Design
											</Link>
										</li>
										<li onClick={() => handeClose()}>
											<Link className='nav-link' href='spacePlanning'>
												Space planning and refurbishment
											</Link>
										</li>
									</ul>
								</li>
								<li className='dropdown'>
									<a href='finishing'>
										<span onClick={() => setDeep2DropDown(!deep2dropDown)}>
											Project Management
										</span>{" "}
										<i className='bi bi-chevron-right'></i>
									</a>
									<ul className={deep2dropDown ? "dropdown-active" : ""}>
										<li onClick={() => handeClose()}>
											<Link className='nav-link' href='finishing'>
												Finishing and partitioning works
											</Link>
										</li>
										<li onClick={() => handeClose()}>
											<Link className='nav-link' href='furniture'>
												Furniture
											</Link>
										</li>
										<li onClick={() => handeClose()}>
											<Link className='nav-link' href='decoration'>
												Decoration
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li onClick={() => setMobile(false)}>
							<a className='nav-link scrollto' href='Contact'>
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
