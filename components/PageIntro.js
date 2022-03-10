import React from "react";
// import styles from '../styles/about.css'

function AboutIntro({ name }) {
	return (
		<div>
			<div className='pageBannerAbout'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 offset-lg-3'>
							<div className='header-text'>
								<h2>{name}</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutIntro;
