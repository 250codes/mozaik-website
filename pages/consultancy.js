import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import ServicesPagesTitle from "../components/servicesPagesTitle";
import ServicesPagesBody from "../components/ServicesPagesBody";

function Consultancy() {
	return (
		<div>
			<Navbar />
			<Head title={"Consultancy"} />
			<PageIntro name='Consultancy' />
			<div className='container ptb-55'>
				<ServicesPagesTitle 
					title="Consultancy" 
					body= {`From a blank canvas, we work to create spaces that inspire staff,
					enrich culture and improve recruitment and retention. Ultimately, It
					will help to bring people together to create the products and services
					that will make your business a success.`}
				/>
				<div className='row'>
					<ServicesPagesBody 
						image='https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						text={`Discover, outline and advise. We take the time to understand the requirements of your business and assess how it currently works.
						We will complete a full workplace analysis of your current office design, including a site survey, plus storage audit and analysis.
						 We will also conduct employee surveys to understand how they work and what can be done to improve their productivity.`
						 }
					/>
				</div>
			</div>
		</div>
	);
}

export default Consultancy;
