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

	const setAttributes = () => {
		setlinkId(props.id);
		//	setLinkImg(props.img);
		setLinkLabel(props.label);
		setLinkUrl(props.url);
		setLink(props.link);
	};

	const deleteLink = (e) => {
		setLinkToRemove(link);
	};

	useEffect(() => setAttributes());

	return (
		<div
			className={`${border} py-2 px-3 d-flex flex-row justify-content-between`}
		>
			<div className="pr-3 ">
				<img src="https://via.placeholder.com/100" alt="Link Icon"></img>
			</div>

			<div className="align-self-center">
				<span className="text-primary clearfix">{linkId}</span>
				<span className="text-primary clearfix">{linkLabel}</span>
				<span className="text-primary clearfix">{linkUrl}</span>
			</div>

			<div className="ml-auto p-2 clearfix">
				<div className="col text-right align-self-bottom ">
					<Link to={`/manage/links/edit/${linkId}`} className="btn btn-primary">
						edit
					</Link>
				</div>
				<div className="col text-right align-self-bottom ">
					<button onClick={deleteLink} className="btn btn-primary">
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
