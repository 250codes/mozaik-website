import React from "react";
import log from "../images/logo.png";
import SimpleImageSlider from "react-simple-image-slider";
import Image from "next/image";

function HeroSection() {
	const images = [
		{
			url: "https://images.pexels.com/photos/6970049/pexels-photo-6970049.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6970049.jpg&fm=jpg",
		},
		{
			url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		},
		{
			url: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		},
	];
	return (
		<>
			<div className='position-relative '>
				<div className='opacity-75'>
					<SimpleImageSlider
						width={"100%"}
						height={"100vh"}
						images={images}
						showBullets={true}
						showNavs={true}
					/>
				</div>
				<div className='position-absolute top-50 start-50 translate-middle'>
					<Image
						src={log}
						alt='logo'
						width='300'
						height='200'
						className='main-logo'
					/>
					<h1 className='text-light'>Connecting people with their style</h1>
				</div>
			</div>
		</>
	);
}

export default HeroSection;

{
	/* <div
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
	<div
		className='carousel-inner'
		role='listbox'
		style={{
			margin: "0px",
			padding: " 0px",
			border: "0px",
			margin: "none",
		}}>
		<div
			className='carousel-item active'
			style={{
				backgroundImage:
					"url('')",
				width: "100%",
			}}></div>
		<div
			className='carousel-item '
			style={{
				backgroundImage:
					"url('')",
				width: "100%",
			}}></div>
		<div
			className='carousel-item '
			style={{
				backgroundImage:
					"url('')",
				width: "100%",
			}}></div>
	</div>
	<a
		className='carousel-control-prev'
		href='#carouselExampleIndicators'
		role='button'
		data-slide='prev'>
		<span
			className='carousel-control-prev-icon'
			aria-hidden='true'></span>
		<span className='sr-only'>Previous</span>
	</a>
	<a
		className='carousel-control-next'
		href='#carouselExampleIndicators'
		role='button'
		data-slide='next'>
		<span
			className='carousel-control-next-icon'
			aria-hidden='true'></span>
		<span className='sr-only'>Next</span>
	</a>
</div> */
}
