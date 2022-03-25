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
			<div className='container ptb-110'>
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
						<h3 className='my-3'>Furniture</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							viverra euismod odio, gravida pellentesque urna varius vitae. Sed
							dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris
							ultricies, justo eu convallis placerat, felis enim.
						</p>
						<h3 className='my-3'>Service Details</h3>
						<ul>
							<li>Lorem Ipsum</li>
							<li>Dolor Sit Amet</li>
							<li>Consectetur</li>
							<li>Adipiscing Elit</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Furniture;
