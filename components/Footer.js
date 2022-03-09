import React from "react";
import Image from "next/image";
import log from "../images/logo.png";

export default function Footer() {
	return (
		<footer className='footer-area'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<div className='logo'>
								<a href='index.htm'>
									<Image src={log} width='100%' height='100%' alt='image' />
								</a>
								<p>
									Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
									maecenas accumsan.
								</p>
							</div>
							<ul className='social'>
								<li>
									<a target='_blank' href='index.htm#'>
										<i className='flaticon-facebook-letter-logo'></i>
									</a>
								</li>
								<li>
									<a target='_blank' href='index.htm#'>
										<i className='flaticon-twitter'></i>
									</a>
								</li>
								<li>
									<a target='_blank' href='index.htm#'>
										<i className='flaticon-instagram-logo'></i>
									</a>
								</li>
								<li>
									<a target='_blank' href='index.htm#'>
										<i className='flaticon-youtube-play-button'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Services</h3>
							<ul className='footer-services-list'>
								<li>
									<a href='service-details.html'>Product Engineering</a>
								</li>
								<li>
									<a href='service-details.html'>UX/UI Design</a>
								</li>
								<li>
									<a href='service-details.html'>Big Data Analysis</a>
								</li>
								<li>
									<a href='service-details.html'>Desktop Applications</a>
								</li>
								<li>
									<a href='service-details.html'>Mobile Applications</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Quick Links</h3>
							<ul className='quick-links-list'>
								<li>
									<a href='about.html'>About Us</a>
								</li>
								<li>
									<a href='blog.html'>Blog</a>
								</li>
								<li>
									<a href='contact.html'>Contact</a>
								</li>
								<li>
									<a href='services.html'>Services</a>
								</li>
								<li>
									<a href='pricing.html'>Pricing</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Contacts</h3>
							<ul className='footer-contact-list'>
								<li>
									<span>Address:</span>2750 Quadra Street <br />
									Victoria, Canada
								</li>
								<li>
									<span>Email:</span>
									<a
										href='cdn-cgi/l/email-protection.html'
										className='__cf_email__'
										data-cfemail='640605160d100b0a240309050d084a070b09'>
										[email&#160;protected]
									</a>
								</li>
								<li>
									<span>Phone:</span>+44 587 154756
								</li>
								<li>
									<span>Fax:</span>+44 785 4578964
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright-area'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6 col-md-6 col-sm-6'>
							<p>
								<a href='index' target='_blank'>
									Mozaik
								</a>
								.
							</p>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-6'>
							<ul>
								<li>
									<a href='privacy-policy.html'>Privacy Policy</a>
								</li>
								<li>
									<a href='terms-conditions.html'>Terms &amp; Conditions</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='lines'>
				<div className='line'></div>
				<div className='line'></div>
				<div className='line'></div>
			</div>
		</footer>
	);
}
