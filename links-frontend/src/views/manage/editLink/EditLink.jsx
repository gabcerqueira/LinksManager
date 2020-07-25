import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Navbar from "../../../Components/navbar/Navbar";
import { connect } from "react-redux";
import { linkGet } from "../../../actions/linkActions";
import { linkEdit } from "../../../actions/linkActions";

function EditLink(props) {
	const { linkGet, linkEdit } = props;
	const { id } = useParams();

	const [label, setLabel] = useState();
	const [url, setUrl] = useState();
	const [isSocial, setIsSocial] = useState();
	const [isEdited, setIsEdited] = useState(false);
	let resultPath = null;
	useEffect(() => {
		linkGet(id).then((result) => {
			resultPath = result.payload.data.data;
			setLabel(resultPath.label);
			setUrl(resultPath.url);
			setIsSocial(resultPath.isSocial);
		});
		return () => {};
	}, [isEdited]);

	const submitHandler = (e) => {
		e.preventDefault();

		const data = { label: label, url: url, isSocial: isSocial };
		linkEdit(id, data).then(setIsEdited(true));
	};

	return (
		<>
			<Navbar />
			{isEdited ? <Redirect to="/manage/links" /> : null}
			<div className="container h-100 pt-5">
				<h1 className="mx-auto text-white">Edit Link</h1>
				<div className="d-flex flex-column h-100">
					<form onSubmit={submitHandler}>
						<div className="form-group text-white">
							<label>Label</label>
							<input
								onChange={(e) => setLabel(e.target.value)}
								type="text"
								className="form-control bg-white"
								value={label}
							/>
						</div>
						<div className="form-group ">
							<label>Url</label>
							<input
								onChange={(e) => setUrl(e.target.value)}
								type="text"
								className="form-control bg-white"
								value={url}
							/>
						</div>
						<div className="form-group form-check ">
							<label className="form-check-label">
								is Social
								<input
									onChange={(e) => setIsSocial(e.target.value)}
									type="checkbox"
									name="isSocial"
									checked={!!isSocial}
								/>
								<span className="form-check-sign bg-white"></span>
							</label>
						</div>
						<div>
							<button className="btn btn-secondary btn-round">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
const mapStateToProps = (state) => {
	return { link: state.link.link };
};

export default connect(mapStateToProps, { linkGet, linkEdit })(EditLink);
