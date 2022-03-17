import React from "react";
import Image from "next/image";
import log from "../images/Mozaik.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<footer
			className='footer-area'
			style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<div className='logo'>
								<a href='index.htm'>
									<Image src={log} width='300px' height='150px' alt='image' />
								</a>
								<p>
									Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
									maecenas accumsan.
								</p>
							</div>
							<ul className='social'>
								<li>
									<a target='_blank' href='index.htm#'>
										<FaFacebookF style={{ color: "white" }} />
									</a>
								</li>
								<li>
									<a target='_blank' href='index.htm#'>
										<FaTwitter style={{ color: "white" }} />
									</a>
								</li>
								<li>
									<a target='_blank' href='index.htm#'>
										<FaInstagram style={{ color: "white" }} />
									</a>
								</li>
								<li>
									<a target='_blank' href='index.htm#'>
										<FaYoutube style={{ color: "white" }} />
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
									<a href='service-details.html'>Consultancy</a>
								</li>
								<li>
									<a href='service-details.html'>Mood Boards</a>
								</li>
								<li>
									<a href='service-details.html'>Project management</a>
								</li>
								<li>
									<a href='service-details.html'>Budget Planning</a>
								</li>
								<li>
									<a href='service-details.html'>Interior setup</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Quick Links</h3>
							<ul className='quick-links-list'>
								<li>
									<a href='about.html'>Home</a>
								</li>
								<li>
									<a href='blog.html'>About</a>
								</li>
								<li>
									<a href='contact.html'>Contact</a>
								</li>
								<li>
									<a href='services.html'>Projects</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Contacts</h3>
							<ul className='footer-contact-list'>
								<li>
									<span>Address:</span>KK12 <br />
									Kigali, Rwanda
								</li>
								<li>
									<span>Email:</span>
									<a
										href='cdn-cgi/l/email-protection.html'
										className='__cf_email__'
										data-cfemail='640605160d100b0a240309050d084a070b09'>
										mozaikdeveloper@gmail.com
									</a>
								</li>
								<li>
									<span>Phone:</span>+250 788 224433
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
							<p>Mozaik © {new Date().getFullYear()} All rights reserved</p>
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
		</footer>
	);
}
