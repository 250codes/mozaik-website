import React from "react";
import Image from "next/image";
import Head from "../components/Head";
import image from "../images/contact.png";
import PageIntro from "../components/PageIntro";
function contact() {
	return (
		<div>
			<Head title={"Contact Us!"} />
			<PageIntro name="CONTACT US"/>
			<section className='contact-area ptb-110'>
				<div className='container'>
					<div className='section-title'>
						<h2>Drop us Message for any Query</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className='contact-form'>
						<div className='row align-items-center'>
							<div className='col-lg-5 col-md-12'>
								<div className='contact-image'>
									<Image src={image} width='395px' height='480px' alt='image' />
								</div>
							</div>
							<div className='col-lg-7 col-md-12'>
								<form id='contactForm'>
									<div className='row'>
										<div className='col-lg-6 col-md-6'>
											<div className='form-group'>
												<input
													type='text'
													name='name'
													className='form-control'
													placeholder='Name'
													value=''
												/>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										<div className='col-lg-6 col-md-6'>
											<div className='form-group'>
												<input
													type='text'
													name='email'
													className='form-control'
													placeholder='Email'
													value=''
												/>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										<div className='col-lg-6 col-md-6'>
											<div className='form-group'>
												<input
													type='text'
													name='number'
													className='form-control'
													placeholder='Phone'
													value=''
												/>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										<div className='col-lg-6 col-md-6'>
											<div className='form-group'>
												<input
													type='text'
													name='subject'
													className='form-control'
													placeholder='Subject'
													value=''
												/>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										<div className='col-lg-12 col-md-12'>
											<div className='form-group'>
												<textarea
													name='text'
													className='form-control'
													cols='30'
													rows='5'
													placeholder='Your message'></textarea>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										<div className='col-lg-12 col-md-12'>
											<button type='submit' className='btn btn-primary'>
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					
				</div>
			</section>
		</div>
	);
}

export default contact;
