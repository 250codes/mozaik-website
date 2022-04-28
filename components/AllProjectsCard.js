import React from "react";
import Image from "next/image";
import Link from "next/link";

function AllProjectsCard({ image, url, title }) {
	return (
        <Link href={url}>
          <div class="col-lg-3 mx-2 mt-4 card">
            <Image
              className="card-img-top"
              width={500}
              height={350}
              src={image}
              alt=""
            />
            <div class="card-body">
              <h5 class="card-text text-center text-dark"> {title} </h5>
            </div>
          </div>
        </Link>
	);
}

export default AllProjectsCard;
