import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import ServicesPagesTitle from "../components/ServicesPagesTitle";
import ServicesPagesBody from "../components/ServicesPagesBody";

function Furniture() {
	return (
		<div>
			<Navbar />
			<Head title={"Furniture"} />
			<PageIntro name='Furniture' />
			<div className='container ptb-55'>
				<ServicesPagesTitle
					 title="Furniture" 
					 body={`With everything designed, planned and agreed upon, we get to work building your ideal office. 
					 with our trusted network of contractors and suppliers we conduct the work.`}
				/>
				<div className='row'>
					<ServicesPagesBody 
						image='https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
						text={`We understand that every business is different, which is why we're
						confident that through our vast experience, we have the right
						products to kit out any office environment. We design and source
						furniture and decorations directly from the local manufactures,
						which means that we avoid extra costs that may be put on by any
						third parties – a saving that we pass on to our clients. No matter
						what your company is looking to achieve – with our custom-made
						approach, we have the right solution for you. We are able to offer
						you with any elements you may require, including specialist chairs
						and tables, even dividers and panels that can match your corporate
						colours and therefore create your office's specific aesthetics.`}
					/>
				</div>
			</div>
		</div>
	);
}

export default Furniture;
