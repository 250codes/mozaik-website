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
								src='/images/about.jpg'
								className='img-fluid'
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
								<p className=''>
									We are a business describes the ultimate goals and overarching
									purpose of a for-profit or nonprofit organization. A vision
									statement can serve as the cornerstone of strategic planning,
									providing an organization with direction and a general
									destination as well as defining its aspirations and values
								</p>
								<p className=''>
									We are a business describes the ultimate goals and overarching
									purpose of a for-profit or nonprofit organization. A vision
									statement can serve as the cornerstone of strategic planning,
									providing an organization with direction and a general
									destination as well as defining its aspirations and values
								</p>
							</div>

							<div className='tab-pane fade show' id='vision'>
								<p className=''>
									A vision statement describes the ultimate goals and
									overarching purpose of a for-profit or nonprofit organization.
									A vision statement can serve as the cornerstone of strategic
									planning, providing an organization with direction and a
									general destination as well as defining its aspirations and
									values
								</p>
								<p className=''>
									A vision statement describes the ultimate goals and
									overarching purpose of a for-profit or nonprofit organization.
									A vision statement can serve as the cornerstone of strategic
									planning, providing an organization with direction and a
									general destination as well as defining its aspirations and
									values
								</p>
							</div>

							<div className='tab-pane fade show' id='mission'>
								<p className=''>
									A Mission statement describes the ultimate goals and
									overarching purpose of a for-profit or nonprofit organization.
									A vision statement can serve as the cornerstone of strategic
									planning, providing an organization with direction and a
									general destination as well as defining its aspirations and
									values
								</p>
								<p className=''>
									A Mission statement describes the ultimate goals and
									overarching purpose of a for-profit or nonprofit organization.
									A vision statement can serve as the cornerstone of strategic
									planning, providing an organization with direction and a
									general destination as well as defining its aspirations and
									values
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
