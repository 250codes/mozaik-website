import React from "react";
import log from "../public/images/logoLight.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

function HeroSection() {
	const images = [
		{
			url: "images/cover/cover1.jpg",
		},
		{
			url: "images/cover/cover2.jpg ",
		},
		{
			url: "images/cover/cover3.jpg",
		},
		{
			url: "images/cover/cover4.jpg",
		},

		{
			url: "images/cover/cover5.jpg",
		},
		{
			url: "images/cover/cover6.jpg",
		},
	];
	return (
		<>
			<div className='position-relative '>
				<div className='slide-container'>
					<Fade
						arrows={false}
						duration={5000}
						transitionDuration={500}
						infinite={true}>
						{images.map(function (fadeImage, index) {
							return (
								<div className='each-fade' key={index}>
									<div className='image-container'>
										<img src={fadeImage.url} className='slider-image' />
									</div>
								</div>
							);
						})}
					</Fade>
					<div className='overlay'></div>
				</div>
				<div
					className='position-absolute top-50 start-50 translate-middle'
					id='middle'>
					<center>
						<Image src={log} alt='logo' width='240' height='200' />
						<h3 className='company-tag'>
							Professional Office interior & space planning
						</h3>
					</center>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
