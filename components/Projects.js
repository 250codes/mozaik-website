import React from "react";
import Link from "next/link";
import Image from "next/image";

function Projects() {
	return (
		<section
			className=' bg-f2f6f9 ptb-20'
			style={{ padding: "2rem" }}
			id='projects'>
			<div className=''>
				<div className='section-title'>
					<h2>Projects</h2>
					<p>
						Experts in workspaces, we design and carry out your projects by
						offering solutions that meet the specific objectives of your
						company. We work on ergonomics, light and acoustics according to
						your wishes and we adapt to any constraints of the building. We can
						intervene as soon as the shell is finished. Whatever your project.
						Whether you are independent, with a simple office, or whether you
						have planned to accommodate several hundred employees.
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
