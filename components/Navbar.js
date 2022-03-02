import React from 'react'

function Navbar() {
  return (
		<header>
			<div className='header-area'>
				<div id='sticky-header' className='main-header-area'>
					<div className='container-fluid'>
						<div className='header_bottom_border'>
							<div className='row align-items-center'>
								<div className='col-xl-3 col-lg-2'>
									<div className='logo'>
										<a href='index.html'>
											<img
												src='img/xlogo.png.pagespeed.ic.T58t519xIB.png'
												alt=''
											/>
										</a>
									</div>
								</div>
								<div className='col-xl-6 col-lg-7'>
									<div className='main-menu d-none d-lg-block'>
										<nav>
											<ul id='navigation'>
												<li>
													<a className='active' href='index.html'>
														home
													</a>
												</li>
												<li>
													<a href='Projects.html'>Projects</a>
												</li>
												<li>
													<a href='#'>
														pages <i className='ti-angle-down'></i>
													</a>
													<ul className='submenu'>
														<li>
															<a href='about.html'>about</a>
														</li>
														<li>
															<a href='project_details.html'>project details</a>
														</li>
														<li>
															<a href='elements.html'>elements</a>
														</li>
													</ul>
												</li>
												<li>
													<a href='#'>
														blog <i className='ti-angle-down'></i>
													</a>
													<ul className='submenu'>
														<li>
															<a href='blog.html'>blog</a>
														</li>
														<li>
															<a href='single-blog.html'>single-blog</a>
														</li>
													</ul>
												</li>
												<li>
													<a href='contact.html'>Contact</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
								<div className='col-xl-3 col-lg-3 d-none d-lg-block'>
									<div className='say_hello'>
										<a href='#'>Say Hello</a>
									</div>
								</div>
								<div className='col-12'>
									<div className='mobile_menu d-block d-lg-none'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar