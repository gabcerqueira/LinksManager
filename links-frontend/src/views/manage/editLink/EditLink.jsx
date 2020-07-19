import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Navbar from "../../../Components/navbar/Navbar";
import { connect } from "react-redux";

import { linkGet } from "../../../actions/linkActions";
import { linkEdit } from "../../../actions/linkActions";

function EditLink(props) {
	const { linkGet, link, linkEdit } = props;
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
	}, [isEdited]);

	const submitHandler = (e) => {
		e.preventDefault();

		const data = { label: label, url: url, isSocial: isSocial };
		linkEdit(id, data).then(setIsEdited(true));
		if (isEdited) {
			setIsEdited(false);
			return <Redirect to="/manage/links" />;
		}
	};

	return (
		<>
			<Navbar />
			<div className="container h-100 pt-5">
				<h1 className="mx-auto">Edit Link</h1>
				<div className="d-flex flex-column h-100">
					<form onSubmit={submitHandler}>
						<div className="form-group">
							<label>Label</label>
							<input
								onChange={(e) => setLabel(e.target.value)}
								type="text"
								className="form-control"
								value={label}
							/>
						</div>
						<div className="form-group">
							<label>Url</label>
							<input
								onChange={(e) => setUrl(e.target.value)}
								type="text"
								className="form-control"
								value={url}
							/>
						</div>
						<div className="form-group form-check">
							<label className="form-check-label">
								is Social
								<input
									onChange={(e) => setIsSocial(e.target.value)}
									type="checkbox"
									name="isSocial"
									checked={!!isSocial}
								/>
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
const mapStateToProps = (state) => {
	return { link: state.link.link };
};

export default connect(mapStateToProps, { linkGet, linkEdit })(EditLink);
