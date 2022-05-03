import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
	return (
		<section
			className=' home-project-bg ptb-20'
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
								<Link href='Bpn'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/bpn/1.jpg'
											alt='project1'
										/>
										<div className='content-details fadeIn-top'>
											<h3>Bpn</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>

						{/* <div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='homeDecor'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/cover2.jpg'
											alt='project2'
										/>
										<div className='content-details fadeIn-top'>
											<h3>Home Decor</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div> */}

						<div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='InstituteF'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/institutfrancais/cover.jpg'
											alt='project3'
										/>
										<div className='content-details fadeIn-top'>
											<h3>Institute Francais</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>

						<div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='Kavumo'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/kavumoproject/11.jpg'
											alt='project4'
										/>
										<div className='content-details fadeIn-top'>
											<h3>Kavumo Project</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>
						<div className='col-md-6 d-block mb-4'>
							<div className='content'>
								<Link href='Tsc'>
									<a>
										<div className='content-overlay'></div>
										<Image
											width={400}
											height={400}
											className='content-image'
											src='/images/transafricacommunication/4.jpg'
											alt='project4'
										/>
										<div className='content-details fadeIn-top'>
											<h3>Trans Africa Community</h3>
											<p>This is a short description</p>
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className='abt-btn mt-2 mb-3 ml-5'>
					<Link href='projects' id='abt-btn'>
						More Projects
					</Link>
					<FaArrowRight style={{ color: "white", marginLeft: "4px" }} />
				</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;

//   <h3 className="title">Text fadeIn top</h3>
