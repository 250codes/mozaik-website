import React from "react";
import Image from "next/image";


function ProjectImage({ image, altText, index }) {


	return (
		<div className='col-lg-3 col-md-6'>
			<Image
				width={400}
				height={400}
				className='content-image'
				src={image}
				alt={altText}
				
			/>
			
		</div>
	);
}

export default ProjectImage;
