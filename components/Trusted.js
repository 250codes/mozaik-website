import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 7,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
function Trusted() {
	return (
		<div className='home-project-bg pt-4 pb-4'>
			<h2 className='text-center text-secondary'>Trusted By </h2>
			<section id='clients' className='clients section-bg'>
				<div className='container' data-aos='zoom-in'>
					<Carousel responsive={responsive}>
						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/irembo.png'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/bpn.png'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/trac.png'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/Zipline.png'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/hydroneo.jpg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/institut.jpg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/bchef2.jpg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>

						<div className='d-flex align-items-center justify-content-center my-3'>
							<Image
								src='/clients/logo/ambassade.jpg'
								className='img-fluid'
								width={110}
								height={60}
								alt=''
							/>
						</div>
					</Carousel>
				</div>
			</section>
		</div>
	);
}

export default Trusted;
