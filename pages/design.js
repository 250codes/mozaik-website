import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import ServicesPagesTitle from "../components/ServicesPagesTitle";
import ServicesPagesBody from "../components/ServicesPagesBody";

function Design() {
	return (
		<div>
			<Navbar />
			<Head title={"Design"} />
			<PageIntro name='Design' />
			<div className='container ptb-55'>
				<ServicesPagesTitle 
							title="Design" 
							body= {`Mozaik concepts design team can provide you with a professional
							solution to create an imaginative, functional, and stylish office
							environment that meets the unique needs of the contemporary business
							world.`}
				/>
				<div className='row'>
					<ServicesPagesBody 
							image='https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
							text={`Mozaik concepts design team can provide you with a professional solution to create an imaginative, functional, and stylish office environment that meets the unique needs of the contemporary business world.
									Our Design office designs the layout of projects of all sizes, whether you have a bare site of 1000 m², or simply want to furnish your office.
									we work according to your needs around ergonomics, light and acoustics, in particular. 
									After collecting your expectations and identifying the constraints of the building, the design office endeavours to offer personalized solutions.`
									}
						/>
					<div>
						<p className="text-justify">{`The 2D and 3D plans help you project yourself and further refine your project, anticipating any difficulties. Because it helps to remove obstacles upstream, the work of the design office saves precious time, money and is more efficient.`}</p>
						<p className="text-justify">{`We work with you to think about the desired atmosphere for future premises. Indeed, during the design work, we advise you on colours, materials, floors, acoustics, brightness and layout, our core business.
							We can manage construction sites from A to Z by intervening in all trades.`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Design;
