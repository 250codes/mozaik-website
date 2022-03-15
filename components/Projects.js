import React, { useState } from "react";

function Projects() {
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped(!isFlipped);
	};
	return (
		<section className='services-area bg-f2f6f9 ptb-110'>
			<div className='container'>
				<div className='section-title'>
					<h2>PortFolio</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className='row text-center text-lg-start'>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/aob0ukAYfuI/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/EUfxH-pze7s/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/M185_qYH8vg/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/sesveuG_rNo/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/AvhMzHwiE_0/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/2gYsZUmockw/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/EMSDtjVHdQ8/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/8mUEy0ABdNE/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/G9Rfc1qccH4/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/aJeH0KcFkuc/400x300'
								alt=''
							/>
						</a>
					</div>
					<div className='col-lg-3 col-md-4 col-6'>
						<a href='#' className='d-block mb-4 h-100'>
							<img
								className='img-fluid img-thumbnail'
								src='https://source.unsplash.com/p2TQ-3Bh3Oo/400x300'
								alt=''
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
