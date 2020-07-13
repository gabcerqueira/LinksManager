import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../../../Components/navbar/Navbar";

function EditLink() {
	return (
		<>
			<Navbar />
			<div className="container h-100 pt-5">
				<h1 className="mx-auto">Edit Link</h1>
				<div className="d-flex flex-column h-100">
					<form>
						<div className="form-group">
							<label>Label</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label>Url</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group form-check">
							<label className="form-check-label">
								is Social
								<input type="checkbox" name="isSocial" />
								<span className="form-check-sign"></span>
							</label>
						</div>
						<div>
							<button className="btn btn-primary btn-round">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default EditLink;
