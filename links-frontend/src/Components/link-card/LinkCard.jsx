import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLinkToRemove } from "../../actions/linkActions";

function LinkCard(props) {
	const { setLinkToRemove, border } = props;
	const [linkId, setlinkId] = useState();
	//const [linkImg, setLinkImg] = useState();
	const [linkLabel, setLinkLabel] = useState();
	const [linkUrl, setLinkUrl] = useState();
	const [link, setLink] = useState(null);

	const deleteLink = (e) => {
		setLinkToRemove(link);
	};

	useEffect(() => {
		if (props.id !== linkId) setlinkId(props.id);
		//	setLinkImg(props.img);
		if (props.label !== linkLabel) setLinkLabel(props.label);
		if (props.url !== linkUrl) setLinkUrl(props.url);
		if (props.link !== link) setLink(props.link);
	});

	return (
		<div
			className={`${border} py-2 px-3 d-flex flex-row card-list justify-content-between`}
		>
			<div className="pr-3  py-2 px-2">
				<img src="https://via.placeholder.com/100" alt="Link Icon"></img>
			</div>

			<div className="align-self-center">
				<span className="text-primary clearfix">{linkId}</span>
				<span className="text-primary clearfix">{linkLabel}</span>
				<span className="text-primary clearfix">{linkUrl}</span>
			</div>

			<div className="ml-auto p-2 clearfix">
				<div className="col text-right align-self-bottom ">
					<Link
						to={`/manage/links/edit/${linkId}`}
						className="btn btn-secondary"
					>
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
