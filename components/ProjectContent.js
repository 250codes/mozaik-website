import React from "react";


function ProjectContent({ title, body }) {
	return (
    <div className='intro mt-5 mb-3'>
        <h2 className='text-center text-dark'> { title } </h2>
        <center>
        <p className=''>{ body }</p>
        </center>
    </div>
	);
}

export default ProjectContent;
