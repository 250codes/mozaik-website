import React from "react";
import PageIntro from "../components/PageIntro";
function Dvisuals() {
	return (
		<div>
			<PageIntro name='3Dvisuals' />
			<div className='container ptb-110'>
				<div className='row'>
					<div className='col-md-8'>
						<img
							className='img-fluid'
							src='https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
							alt=''
						/>
					</div>

					<div className='col-md-4'>
						<h3 className='my-3'>3D visuals</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							viverra euismod odio, gravida pellentesque urna varius vitae. Sed
							dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris
							ultricies, justo eu convallis placerat, felis enim.
						</p>
						<h3 className='my-3'>Product Details</h3>
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

export default Dvisuals;