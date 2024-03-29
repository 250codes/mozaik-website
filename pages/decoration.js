import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import ServicesPagesTitle from "../components/ServicesPagesTitle";
import ServicesPagesBody from "../components/ServicesPagesBody";

function Decoration() {
	return (
		<div>
			<Navbar />
			<Head title={"Decoration"} />
			<PageIntro name='Decoration' />
			<div className='container ptb-55'>
				<ServicesPagesTitle 
						title="Decoration" 
						body= {`Once a design is agreed upon, we will then develop a timeline that works for you; keeping any possible disruption to your business to a minimum. 
								With sufficient planning, you can make a seamless transition into your new space (regardless of whether you're staying in the same building or moving to a new one)`}
				/>
				<div className='row'>
					<ServicesPagesBody 
						image='https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						text={`
						Staff welfare and productivity should be paramount to your
						business needs and office furniture is far more than just a
						chair to sit on and a desk to work at! It's been found that if
						your office furniture is designed aesthetically, then the comfort
						of a person is better, which can only mean that their productivity
						and quality of work will similarly increase. Another aspect to
						consider when making your office decoration is how it will make an
						impression on any visitors you may receive. Making a good first
						impression is vital in any way of life and in business, as you
						know, it's crucial. Similarly, board or meeting rooms are a very
						important area of any corporate environment and can be enhanced by
						making sure that everyone is able to function in a comfortable and
						beautiful atmosphere.
						`}
						/>
				</div>
			</div>
		</div>
	);
}

export default Decoration;
