import React from "react";
// import image from "../images/about.jpg"
// import styles from '../styles/vision.css'

import Image from "next/image";
function Vision() {
	return (
		<section className='vision'>
			<div className='container'>
				<div className='row g-4 g-lg-5'>
					<div className='col-lg-5'>
						<div className='vision-img'>
							<Image
								layout='intrinsic'
								width={385}
								height={487}
								src='/images/cover4.jpg'
								className='img-fluid aboutImage'
								alt=''
							/>
						</div>
					</div>

					<div className='col-lg-7'>
						<h3 className='pt-0 pt-lg-5'>
							End-to-end turnkey office design and build
						</h3>

						<ul className='nav nav-pills mb-3'>
							<li>
								<a
									className='nav-link active'
									data-bs-toggle='pill'
									href='#about'>
									About
								</a>
							</li>
							<li>
								<a className='nav-link' data-bs-toggle='pill' href='#vision'>
									Vision
								</a>
							</li>
							<li>
								<a className='nav-link' data-bs-toggle='pill' href='#mission'>
									Mission
								</a>
							</li>
						</ul>

						<div className='tab-content'>
							<div className='tab-pane fade show active' id='about'>
								<p className='mb-2'>
									{`
									It is our mission to operate our business with care, honesty and integrity. We leverage all of this knowledge to act as trusted advisers to our clients.
									`}
								</p>
								<p className=''>
									{`
									Recognized by clients for CREATIVITY in THOUGHTS, APPROACHES, SOLUTIONS and FINISHED PRODUCTS.
									`}
								</p>
								<ul>
									<li>{`To always exceed our client’s expectations.`}</li>
									<li>{`We believe in striving to deliver quality interior design services to our clients within their schedule and budget.
`}</li>
									<li>{`Treating all our Vendors with respect and fairness.
`}</li>
									<li>{`Being ethical in all our dealings with Clients, Vendors and Suppliers.`}</li>
									<li>{`Always hiring exciting and diverse People who are not all alike.`}</li>
									<li>{`Being thorough and paying attention to the details`}</li>
									<li>{`Being competitive with our fees.`}</li>
									<li>{`Being a learning organization that is constantly changing and questioning the way we do things.`}</li>
									<li>{`Being a fun place to work by being supportive, free of politics, team-oriented, laughter filled and friendly environment`}</li>
									<li>{`MOZAIK Concepts is your choice of Interior Architecture Firm who cares for your needs`}</li>
								</ul>
							</div>

							<div className='tab-pane fade show' id='vision'>
								<p className=''>
									{`
									Our vision is to be a reputable, sustainable, and desirable premier professional/commercial interior architecture firm of the African market place providing the state-of-the-art innovative designs and superior quality finishing. We will continue to leverage on our many years of professional experience to consistently deliver exclusive design services that bring a complete satisfaction of our partners and client’s requirements.

									`}
								</p>
							</div>

							<div className='tab-pane fade show' id='mission'>
								<p className=''>
									{`
									Our mission is to create reward experience and value that combine functionality with high quality and innovation for our customers. We want every partner and client experience to be the talk of a life time. Also, to define the most sophisticated and superior standard of quality in every exterior and interior designs.
`}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Vision;
