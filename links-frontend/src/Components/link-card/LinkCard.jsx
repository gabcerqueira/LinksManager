import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LinkCard(props) {
	const [linkId, setlinkId] = useState();
	const [linkImg, setLinkImg] = useState();
	const [linkLabel, setLinkLabel] = useState();
	const [linkUrl, setLinkUrl] = useState();

	const setAttributes = () => {
		setlinkId(props.id);
		setLinkImg(props.img);
		setLinkLabel(props.label);
		setLinkUrl(props.url);
	};

	useEffect(() => setAttributes(), []);

	return (
		<div className=" py-2 px-3 d-flex flex-row justify-content-between">
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
	);
}

export default LinkCard;
