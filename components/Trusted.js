import React from "react";
import Image from "next/image";

function Trusted() {
	return (
		<div className='home-project-bg pt-4 pb-4'>
			<h2 className='text-center text-secondary'>Trusted By </h2>
			<section id='clients' className='clients section-bg'>
				<div className='container' data-aos='zoom-in'>
					<div className='row'>
						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-1.png'
								className='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-2.png'
								className='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-3.png'
								className='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-4.png'
								className='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-5.png'
								className='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-6.png'
								className='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Trusted;
