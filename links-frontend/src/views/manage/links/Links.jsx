import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/navbar/Navbar";
import { connect } from "react-redux";
import { linkList } from "../../../actions/linkActions";
import LinkCard from "../../../Components/link-card/LinkCard";

function Links(props) {
	const { links, linkList, linkToRemove } = props;

	useEffect(() => {
		linkList();
	}, [linkList]);

	const remove = (linkToRemove) => {};

	const renderLinks = (links) => {
		if (!links) return null;
		return links.map((link) => {
			const border =
				linkToRemove && linkToRemove.id === link.id
					? "border border-danger rounded"
					: "border border-transparent";
			return (
				<LinkCard
					key={link.id}
					id={link.id}
					img={link.img}
					label={link.label}
					url={link.url}
					link={link}
					border={border}
				/>
			);
		});
	};

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
				<div className="container">{renderLinks(links)}</div>
			</div>
		</>
	);
}

const mapStateToprops = (state) => {
	return { links: state.link.links, linkToRemove: state.link.linkToRemove };
};

export default connect(mapStateToprops, { linkList })(Links);
