import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
function Design() {
	return (
		<div>
			<Navbar />
			<Head title={"Design"} />
			<PageIntro name='Design' />
			<div className='container ptb-55'>
				<p>
					Mozaik concepts design team can provide you with a professional
					solution to create an imaginative, functional, and stylish office
					environment that meets the unique needs of the contemporary business
					world.
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
						<h3 className='my-3 text-dark'>Design</h3>
						<p>{`Mozaik concepts design team can provide you with a professional solution to create an imaginative, functional, and stylish office environment that meets the unique needs of the contemporary business world.`}</p>
						<p>{`Our Design office designs the layout of projects of all sizes, whether you have a bare site of 1000 m², or simply want to furnish your office. we work according to your needs around ergonomics, light and acoustics, in particular. After collecting your expectations and identifying the constraints of the building, the design office endeavours to offer personalized solutions.`}</p>
					</div>
					<div>
						<p>{`The 2D and 3D plans help you project yourself and further refine your project, anticipating any difficulties. Because it helps to remove obstacles upstream, the work of the design office saves precious time, money and is more efficient.`}</p>
						<p>{`We work with you to think about the desired atmosphere for future premises. Indeed, during the design work, we advise you on colours, materials, floors, acoustics, brightness and layout, our core business.
We can manage construction sites from A to Z by intervening in all trades.
`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Design;
