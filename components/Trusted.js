import React from "react";
import Image from "next/image";

function Trusted() {
	return (
		<div className='home-project-bg pt-4 pb-4'>
			<h2 className='text-center text-secondary'>Trusted By </h2>
			<section id='clients' class='clients section-bg'>
				<div class='container' data-aos='zoom-in'>
					<div class='row'>
						<div class='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-1.png'
								class='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div class='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-2.png'
								class='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div class='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-3.png'
								class='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div class='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-4.png'
								class='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div class='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-5.png'
								class='img-fluid'
								width={100}
								height={50}
								alt=''
							/>
						</div>

						<div class='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<Image
								src='/clients/client-6.png'
								class='img-fluid'
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
