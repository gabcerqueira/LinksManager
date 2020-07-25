import React, { useState } from "react";
import Navbar from "../../../Components/navbar/Navbar";
import { connect } from "react-redux";
import { linkCreate } from "../../../actions/linkActions";
import { Redirect } from "react-router-dom";

function CreateLink(props) {
	const { link, linkCreate, message } = props;

	const [label, setLabel] = useState();
	const [url, setUrl] = useState();
	const [isSocial, setIsSocial] = useState();
	//const [loading, setLoading] = useState(false);
	const [created, setCreated] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		//	setLoading(true);
		const data = { label: label, url: url, isSocial: isSocial };

		linkCreate(data).then(setCreated(true));
	};

	if (link && created) {
		return <Redirect to="/manage/links" />;
	}

	return (
		<>
			<Navbar />
			<div className="container h-100 pt-5">
				<h1 className="mx-auto">Create Link</h1>
				<div className="d-flex flex-column h-100">
					<form onSubmit={submitHandler}>
						<div className="form-group">
							<label>Label</label>
							<input
								onChange={(e) => setLabel(e.target.value)}
								type="text"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label>Url</label>
							<input
								onChange={(e) => setUrl(e.target.value)}
								type="text"
								className="form-control"
							/>
						</div>
						<div className="form-group form-check">
							<label className="form-check-label">
								is Social
								<input
									onChange={(e) => setIsSocial(e.target.value)}
									type="checkbox"
									name="isSocial"
								/>
								<span className="form-check-sign"></span>
							</label>
						</div>
						<div>
							<button className="btn btn-primary btn-round">Submit</button>
						</div>
						<div>
							<span className="text-center text-black mx-auto">
								{message ? message : null}
							</span>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return { link: state.link.link, message: state.link.message };
};

export default connect(mapStateToProps, { linkCreate })(CreateLink);
