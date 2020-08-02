import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLinkToRemove } from "../../actions/linkActions";

function LinkCard(props) {
	const { setLinkToRemove, border, label, id, url } = props;

	const deleteLink = (e) => {
		setLinkToRemove(props);
	};

	return (
		<div
			className={`${border} py-2 px-3 d-flex flex-row card-list justify-content-between`}
		>
			<div className="pr-3  py-2 px-2">
				<img src="https://via.placeholder.com/100" alt="Link Icon"></img>
			</div>

			<div className="align-self-center">
				<span className="text-primary clearfix">{id}</span>
				<span className="text-primary clearfix">{label}</span>
				<span className="text-primary clearfix">{url}</span>
			</div>

			<div className="ml-auto p-2 clearfix">
				<div className="col text-right align-self-bottom ">
					<Link to={`/manage/links/edit/${id}`} className="btn btn-secondary">
						edit
					</Link>
				</div>
				<div className="col text-right align-self-bottom ">
					<button onClick={deleteLink} className="btn btn-secondary">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { linkToRemove: state.link.linkToRemove };
};

export default connect(mapStateToProps, { setLinkToRemove })(LinkCard);
