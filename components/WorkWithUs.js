import React from "react";
import Link from "next/link";

function WorkWithUs() {
	return (
		<div className='container mb-5'>
			<div className='row'>
				<div className='col-md-4 wk-t mt-md-4'>
					<h1 className='wk'>Work</h1>
					<h1 className='wk' style={{ marginTop: "-1rem" }}>
						With us
					</h1>
				</div>
				<div className='col-md-8'>
					<p className='my-3 wk-p'>
						Workspaces are living spaces. That is why they must be carefully
						thought out.
					</p>
					<p>
					We will work closely with your team to establish a thorough understanding of your interior space and work activities in order to create the best possible solution for your office layout and design. We are trained to translate the results of a workflow analysis and other tools into situation-specific interior solutions. All aspects of office space design and planning will support the implementation of your business’ facility strategy and the well-being of your employees and customers.
					</p>
					<center>
						<div className='abt-btn'>
							<Link href='workWithUs' id='abt-btn'>
								Learn More
							</Link>
						</div>
					</center>
				</div>
			</div>
		</div>
	);
}

export default WorkWithUs;
