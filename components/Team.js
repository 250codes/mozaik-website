import React from "react";
import Image from "next/image";
function Team() {
	return (
		<section id='team' className='team'>
			<div className='container' data-aos='fade-up'>
				<div className='team-header'>
					<h2 className="text-dark" >Our Team</h2>
				</div>

				<div className='row gy-5'>
					<div
						className='col-xl-4 col-md-6 d-flex pt-5'
						data-aos='zoom-in'
						data-aos-delay='200'>
						<div className='team-member'>
							<div className='member-img'>
								<Image
									layout='intrinsic'
									width={700}
									height={700}
									src='/images/team-1.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='member-info'>
								<div className='social'>
									<a href=''>
										<i className='bi bi-twitter'></i>
									</a>
									<a href=''>
										<i className='bi bi-facebook'></i>
									</a>
									<a href=''>
										<i className='bi bi-instagram'></i>
									</a>
									<a href=''>
										<i className='bi bi-linkedin'></i>
									</a>
								</div>
								<h4>John Doe</h4>
								<span>Chief Executive Officer</span>
							</div>
						</div>
					</div>

					<div
						className='col-xl-4 col-md-6 d-flex pt-5'
						data-aos='zoom-in'
						data-aos-delay='400'>
						<div className='team-member'>
							<div className='member-img'>
								<Image
									layout='intrinsic'
									width={700}
									height={700}
									src='/images/team-1.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='member-info'>
								<div className='social'>
									<a href=''>
										<i className='bi bi-twitter'></i>
									</a>
									<a href=''>
										<i className='bi bi-facebook'></i>
									</a>
									<a href=''>
										<i className='bi bi-instagram'></i>
									</a>
									<a href=''>
										<i className='bi bi-linkedin'></i>
									</a>
								</div>
								<h4>John Doe</h4>
								<span>Product Manager</span>
							</div>
						</div>
					</div>

					<div
						className='col-xl-4 col-md-6 d-flex pt-5'
						data-aos='zoom-in'
						data-aos-delay='600'>
						<div className='team-member'>
							<div className='member-img'>
								<Image
									layout='intrinsic'
									width={700}
									height={700}
									src='/images/team-1.jpg'
									className='img-fluid'
									alt=''
								/>
							</div>
							<div className='member-info'>
								<div className='social'>
									<a href=''>
										<i className='bi bi-twitter'></i>
									</a>
									<a href=''>
										<i className='bi bi-facebook'></i>
									</a>
									<a href=''>
										<i className='bi bi-instagram'></i>
									</a>
									<a href=''>
										<i className='bi bi-linkedin'></i>
									</a>
								</div>
								<h4>John Doe</h4>
								<span>CTO</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
