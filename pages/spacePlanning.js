import React from "react";
import PageIntro from "../components/PageIntro";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import ServicesPagesTitle from "../components/ServicesPagesTitle";
import ServicesPagesBody from "../components/ServicesPagesBody";

function SpacePlanning() {
	return (
		<div>
			<Navbar />
			<Head title={"Space planning and refurbishment"} />
			<PageIntro name='Space planning and refurbishment' />
			<div className='container ptb-55'>
				<ServicesPagesTitle 
							title="Space planning and refurbishment" 
							body= {`From a blank canvas, we work to create spaces that inspire staff,
							enrich culture and improve recruitment and retention. Ultimately, It
							will help to bring people together to create the products and services
							that will make your business a success.`}
				/>
				<div className='row'>
					<ServicesPagesBody 
								image='https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
								text={`From a blank canvas, we work to create spaces that inspire staff, enrich culture and improve recruitment and retention. 
										Ultimately, It will help to bring people together to create the products and services that will make your business a success.
										Whether it's a refresh of your existing spaces, a complete office overhaul or anything else in between, 
										you can rest assured that through our experience, skills and approach, your workplace environment will grow strong with Mozaik Concepts.
										We love to see older workplaces undergo incredible renovations to create an utterly unique and optimised working environment.
									`}
							/>
				</div>
			</div>
		</div>
	);
}

export default SpacePlanning;
