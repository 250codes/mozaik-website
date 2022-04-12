import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
function workWithUs() {
	return (
		<div className='workWithUs'>
			<Navbar />
			<Head title={"Work With Us"} />
			<PageIntro name='Work With Us' />
			<h1 className='section-title mt-4 text-dark'>Why work with us ?</h1>
			<p
				className='mx-auto text-center text-dark w-60'
				>{`Choosing to create new office interiors represents a significant financial commitment for your company, so the overarching question you'll be asking will be what benefits for my business will make this particular investment worthwhile?
`}</p>

			<section className='w-75 p-3 first'>
				<h4 className='ml-3'>
					{`Ultimately, investing in a new office fit out can put your business in a
				better position to:`}
				</h4>
				<div className='ml-4 mt-4'>
					<h5 className='font-weight-bold text-dark'>
						Increase productivity rates
					</h5>
					<p>
						{`One of the major reasons why a business would choose to improve their
				workplace interiors is to give their employees the best opportunity to
				raise their productivity levels and the quality of work that they are
				able to produce.`}
					</p>
					<p>{`It makes perfect sense; if we work in an environment that is uncomfortable, demoralising and dull, it will create those same feelings inside of us. Is the workplace even equipped with all of the necessary tools and facilities that help employees along with their work? If not, it shouldn't be a surprise that the rate and quality of work aren't at the levels they should be at.
`}</p>
					<p>{`By making use of office fitters to re-design your workspaces, you will be fashioning a fresh design that will suit the working styles of everyone in the company; giving them the ideal environment in which to feel inspired, empowered and equipped for their work.
`}</p>
				</div>

				<div className='ml-4 mt-4'>
					<h5 className='font-weight-bold text-dark'>
						Make more efficient use of the space
					</h5>
					<p>
						{`By reimagining your office interiors to work for you, rather than you for it, you will be making better use of the building. Too many businesses pay for space that they do not use; modern office design techniques can plan out every square foot of space that can be repurposed for something else; be that extra open plan space, a breakout area, a kitchen, office storage or anything else you need to make the in-work experience better for your employees.`}
					</p>
				</div>
				<div className='ml-4 mt-4'>
					<h5 className='font-weight-bold text-dark'>
						Establish your business philosophies and branding.
					</h5>
					<p>
						{`If you intend to host clients, then the need to present yourself as per your advertising materials in a professional environment is an absolute must. By using an office fit out company, you can place your company's identity, philosophies and branding throughout the design, creating that original look and feel that makes your business stand out.
`}
					</p>
				</div>
			</section>
			<section>
				<h1 className='section-title mt-4 text-dark'>Our Process</h1>
				<div className='mx-auto w-75 text-dark'>
					<p>{`a. Discover & outline. We take the time to understand the requirements of your business and assess how it currently works. We will complete a full workplace analysis of your current office design, including a site survey, plus storage audit and analysis. We will also conduct employee surveys to understand how they work and what can be done to improve their productivity.
`}</p>
					<p>{`b. Design. With the information provided, our team will get to work creating the design. We can produce 3Dvisualisations, 2D plans, concept sketches, and theme boards to enable you to visualise, agree, and implement your new environment.`}</p>
					<p>{`c. Plan. Once a design is agreed upon, we will then develop a timeline that works for you; keeping any possible disruption to your business to a minimum. With sufficient planning, you can make a seamless transition into your new space (regardless of whether you're staying in the same building or moving to a new one).
`}</p>
					<p>{`d. Project management. With everything designed, planned and agreed upon, we get to work building your ideal office. with our trusted network of contractors and suppliers we conduct the work.
`}</p>
					<p>{`e.Support and aftercare. Once the office design and build is completed we don't just shake hands and walk away, leaving you to it; we will be on hand to offer any additional support and aftercare you need. If you experience any issues or see anything that doesn't quite work as you imagined, our team will work with you to find the best solution.
`}</p>
				</div>
			</section>
			<section className='w-75 p-3 text-dark mt-4 mb-4 third'>
				<p>{`A key step in the layout, the furniture gives life to a space.`}</p>
				<p>{`Thinking about furniture is not simply choosing a desk from a catalogue. It is much more than that. It is rather a question of thinking of the spaces as a whole to serve a vision, uses and objectives of ergonomics, acoustics and luminosity, but also of aesthetics and comfort.`}</p>
				<p>{`We adapt to working methods, to combine productivity and optimization of spaces, always with the satisfaction and efficiency of all employees in mind. collaborators.`}</p>
				<p>{`Our in-house office design and space planning team can provide a professional office design solution to create an imaginative, functional, and stylish office environment that is created to meet the unique needs of your business.`}</p>
				<p>{`Our team can provide you with a professional turnkey solution to create an imaginative, functional, and stylish office environment that meets the unique needs of the contemporary business world.
`}</p>
			</section>
		</div>
	);
}

export default workWithUs;
