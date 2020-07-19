import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/navbar/Navbar";
import { connect } from "react-redux";
import { linkList } from "../../../actions/linkActions";
import LinkCard from "../../../Components/link-card/LinkCard";

function Links(props) {
	const { links, linkList } = props;

	useEffect(() => {
		linkList();
	}, [linkList]);

	const renderLinks = (links) => {
		return links.map((link) => {
			return (
				<LinkCard
					key={link.id}
					id={link.id}
					img={link.img}
					label={link.label}
					url={link.url}
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
	return { links: state.link.links };
};

export default connect(mapStateToprops, { linkList })(Links);
