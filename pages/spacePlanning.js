import React from 'react'
import PageIntro from "../components/PageIntro";
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Head from "../components/Head";
function SpacePlanning() {
  return (
		<div>
			<Navbar />
			<Head title={"Space planning and refurbishment"} />
			<PageIntro name='Space planning and refurbishment' />
			<div className='container ptb-110'>
				<p>
				From a blank canvas, we work to create spaces that inspire staff, enrich culture and improve recruitment and retention. Ultimately, It will help to bring people together to create the products and services that will make your business a success.
				</p>
				<div className='row'>
					<div className='col-md-8'>
						<Image
							className='img-fluid w-100'
							layout='intrinsic'
							width={700}
							height={475}
							src='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							alt=''
						/>
					</div>

					<div className='col-md-4'>
						<h3 className='my-3'>Space planning and refurbishment</h3>
						<p>
						Whether it's a refresh of your existing spaces, a complete office overhaul or anything else in between, you can rest assured that through our experience, skills and approach, your workplace environment will grow strong with Mozaik Concepts.
We love to see older workplaces undergo incredible renovations to create an utterly unique and optimised working environment.

						</p>

					</div>
				</div>
			</div>
		</div>
	);
}

export default SpacePlanning
