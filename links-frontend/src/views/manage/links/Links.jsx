import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/navbar/Navbar";
function Links() {
	return (
		<>
			<Navbar />

			<div className="container">
				<div className="row">
					<div className="col">
						<h1>Links</h1>
					</div>
					<div className="col text-right align-self-bottom pt-2">
						<Link to="/manage/links/create" className="btn btn-primary">
							Add
						</Link>
					</div>
				</div>

				<div className=" py-2 px-3 d-flex flex-row justify-content-between">
					<div className="pr-3 ">
						<img src="https://via.placeholder.com/100" alt="Link Icon"></img>
					</div>

					<div className="align-self-center">
						<span className="text-primary clearfix">Item Label</span>
						<span className="text-primary clearfix">Item Url</span>
					</div>

					<div className="ml-auto p-2 clearfix">
						<div className="col text-right align-self-bottom ">
							<Link to="/manage/links/edit" className="btn btn-primary">
								edit
							</Link>
						</div>
						<div className="col text-right align-self-bottom ">
							<Link to="/manage/links/create" className="btn btn-primary">
								delete
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Links;
