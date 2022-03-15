import React from 'react'
import PageIntro from "../components/PageIntro";
function productDesign() {
  return (
		<div>
			<PageIntro name='Product Design' />
			<div className='container ptb-110'>
				<div className='row'>
					<div className='col-md-8'>
						<img
							className='img-fluid w-100'
							src='https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							alt=''
						/>
					</div>

					<div className='col-md-4'>
						<h3 className='my-3'>Product Design</h3>
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

export default productDesign