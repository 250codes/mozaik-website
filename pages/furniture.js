import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
function Furniture() {
	return (
		<div>
			<Navbar />
			<Head title={"Furniture"} />
			<PageIntro name='Furniture' />
			<div className='container ptb-55'>
				<h3 className='my-3 text-dark'>Furniture</h3>
				<p>
					{`With everything designed, planned and agreed upon, we get to work building your ideal office. with our trusted network of contractors and suppliers we conduct the work.`}
				</p>
				<div className='row'>
					<div className='col-md-8'>
						<Image
							className='img-fluid w-100'
							layout='intrinsic'
							width={700}
							height={475}
							src='https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
							alt=''
						/>
					</div>
					<div className='col-md-4'>
						<p>
							{`We understand that every business is different, which is why we're
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
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Furniture;
