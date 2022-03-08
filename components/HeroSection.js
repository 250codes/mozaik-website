import React from "react";

function HeroSection() {
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide my-carousel my-carousel'
			data-ride='carousel'>
			<ol className='carousel-indicators'>
				<li
					data-target='#carouselExampleIndicators'
					data-slide-to='0'
					className='active'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
			</ol>
			<div className='carousel-inner' role='listbox'>
				<div
					className='carousel-item active'
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/6970049/pexels-photo-6970049.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6970049.jpg&fm=jpg')",
					}}></div>
				<div
					className='carousel-item '
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/6970049/pexels-photo-6970049.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6970049.jpg&fm=jpg')",
					}}></div>
				<div
					className='carousel-item '
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/6970049/pexels-photo-6970049.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6970049.jpg&fm=jpg')",
					}}></div>
			</div>
			<a
				className='carousel-control-prev'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	);
}

export default HeroSection;
