import React from "react";
import Image from "next/image";
import log from "../public/images/logoLight.png";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className='footer-area'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<div className='logo'>
								<Link href='/'>
									<Image src={log} width='150px' height='150px' alt='image' />
								</Link>
								<p>Professional Office interior & space planning.</p>
							</div>
							<ul className='social'>
								<li>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.linkedin.com/company/mozaikconcepts/'>
										<FaLinkedin style={{ color: "white" }} />
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://www.instagram.com/mozaikconcepts/'>
										<FaInstagram style={{ color: "white" }} />
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
									<Link className='nav-link' href='consultancy'>
										Consultancy
									</Link>
								</li>
								<li>
									<Link className='nav-link' href='design'>
										Design
									</Link>
								</li>
								<li>
									<Link className='nav-link' href='productDesign'>
										Products Design
									</Link>
								</li>
								<li>
									<Link className='nav-link' href='finishing'>
										Finishing and Partitioninng works
									</Link>
								</li>
								<li>
									<Link className='nav-link' href='furniture'>
										Furniture
									</Link>
								</li>
								<li>
									<Link className='nav-link' href='decoration'>
										Decoration
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Quick Links</h3>
							<ul className='quick-links-list'>
								<li>
									<Link className='nav-link' href='/'>
										Home
									</Link>
								</li>
								<li>
									<Link className='nav-link' href='about'>
										About
									</Link>
								</li>
								<li>
									<Link className='nav-link' href='Contact'>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Contacts</h3>
							<ul className='footer-contact-list'>
								<li>
									<span>Address:</span>8 KG 680 St <br />
									Kigali, Rwanda
								</li>
								<li>
									<span>Email:</span>
									<a href="mailto:mozaikconcepts@gmail.com" className="text-light">
										mozaikconcepts@gmail.com
									</a>
								</li>
								<li>
									<span>Phone:</span>+250 785 605 599
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
							<p>Mozaik Concepts © {new Date().getFullYear()} All rights reserved</p>
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
