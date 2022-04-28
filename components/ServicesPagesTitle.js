import React from "react";

function ServicesPagesTitle({ title, body }) {
	return (
        <>
        	<h3 className='my-3 text-dark'>{title}</h3>
			<p className="mb-3 service-header-bold">
					{body}
			</p>
        </>
	);
}

export default ServicesPagesTitle;
