import React from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
function Finishing() {
	return (
		<div>
			<Navbar />
			<Head title={"Finishing"} />
			<PageIntro name='Finishing and Partitioning works' />
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
						<h3 className='my-3 text-dark'>Finishing and Partitioning works</h3>
						<p>
							{`Whether you're a property developer, landlord or a business that is opening in a new location, a turnkey office build is a great solution in ensuring the entire process runs as efficiently and seamlessly as possible. The demands on your time are already likely to be heavy, so rather than you dealing with multiple services and contractors, a turnkey office design and build sees you deal with just a single point of contact.
`}
							<p>{`With a single contact, you'll also been suring that the build quality will be kept to the same high standard; no taking chances on different contractors who may work differently from others. You'll be working with office fit out experts who will manage the project from start to finish; so, no worrying about red tape or complicated regulations.
`}</p>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Finishing;
