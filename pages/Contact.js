import React from "react";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Head from "../components/Head";
import image from "../images/contact.png";
import PageIntro from "../components/PageIntro";

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
			<Head title={"Contact Us!"} />
			<PageIntro name='CONTACT US' />
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
													className='btn btn-primary'
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
