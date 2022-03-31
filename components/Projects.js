import React from "react";
import Link from "next/link";
import Image from "next/image";

function Projects() {
	return (
		<section className=' bg-f2f6f9 ptb-20' style={{ padding: "2rem" }} id="projects">
			<div className=''>
				<div className='section-title'>
					<h2>PortFolio</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='projects'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/project1.jpg'
											alt='project1'
										/>
										<div className='content-details fadeIn-top'>
											<h3>This is a title</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>

						<div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='projects'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/project2.jpg'
											alt='project2'
										/>
										<div className='content-details fadeIn-top'>
											<h3>This is a title</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>

						<div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='projects'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/project3.jpg'
											alt='project3'
										/>
										<div className='content-details fadeIn-top'>
											<h3>This is a title</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>

						<div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='projects'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/project4.jpg'
											alt='project4'
										/>
										<div className='content-details fadeIn-top'>
											<h3>This is a title</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;

//   <h3 className="title">Text fadeIn top</h3>
