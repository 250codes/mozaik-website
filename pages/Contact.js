import React from "react";
import { useState } from "react";
import axios from "axios";

import Head from "../components/Head";

import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccessMessage("");
		const data = {
			name,
			email,
			phone,
			subject,
			message,
		};
		if (!(phone || email)) {
			return setError("Provide an email or a phone number please!");
		}
		if (!subject || !message || !name) {
			return setError("name, subject and message are required!");
		}
		setError("");
		setSubmitting(true);
		await axios
			.post("/api/contact", data)
			.then(() => {
				setSuccessMessage("Message Sent! Thanks for contacting us.");
				setName("");
				setEmail("");
				setPhone("");
				setSubject("");
				setMessage("");
				setError("");
				setSubmitting(false);
			})
			.catch(() => {
				return setError("Message Not Sent! check your Internet Connection.");
			});
		return setSubmitting(false);
	};

	return (
		<div>
			<Navbar />
			<Head title={"Contact Us!"} />
			<PageIntro name='CONTACT US' />
			<section className='contact-area ptb-110'>
				<div className='container'>
					<div className='section-title'>
						<h2>Drop us Message for any Query</h2>
					</div>
					<div className='contact-form'>
						<div className='row align-items-center'>
							<div className='col-lg-6 col-md-12'>
								<div className='contact-image'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.569270099404!2d30.069947188657277!3d-1.9646087833235018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca771c5178d67%3A0x96e7701dc918beb4!2sMOZAIK%20Concepts!5e0!3m2!1sfr!2srw!4v1651509091052!5m2!1sfr!2srw'
										width='100%'
										height='480px'
										style={{ border: "0" }}
										loading='lazy'
										referrerpolicy='no-referrer-when-downgrade'></iframe>
								</div>
							</div>
							<div className='col-lg-6 col-md-12'>
								<form id='contactForm'>
									<div className='row'>
										<div className='col-lg-6 col-md-6'>
											<div className='form-group'>
												<input
													type='text'
													name='name'
													className='form-control'
													placeholder='Name'
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										<div className='col-lg-6 col-md-6'>
											<div className='form-group'>
												<input
													type='email'
													name='email'
													className='form-control'
													placeholder='Email'
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										<div className='col-lg-6 col-md-6'>
											<div className='form-group'>
												<input
													type='phone'
													name='number'
													className='form-control'
													placeholder='Phone'
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
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
													value={subject}
													onChange={(e) => setSubject(e.target.value)}
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
													placeholder='Your message'
													value={message}
													onChange={(e) =>
														setMessage(e.target.value)
													}></textarea>
												<div
													className='invalid-feedback'
													style={{ display: "block" }}></div>
											</div>
										</div>
										{error ? (
											<div
												className='alert alert-danger alert-boxes'
												role='alert'>
												{error}
											</div>
										) : null}
										{successMessage ? (
											<div
												className='alert alert-success alert-boxes'
												role='alert'>
												{successMessage}
											</div>
										) : null}
										<div className='col-lg-12 col-md-12'>
											{submitting ? (
												<button
													className='btn hover:cursor-no-drop btn-primary'
													onClick={handleSubmit}>
													Sending...
												</button>
											) : (
												<button
													className='btn contactUsPage-btn-bg'
													onClick={handleSubmit}>
													Send Message
												</button>
											)}
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

export default Contact;
