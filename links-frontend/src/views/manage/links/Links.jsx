import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/navbar/Navbar";
import { connect } from "react-redux";
import { linkList } from "../../../actions/linkActions";
import LinkCard from "../../../Components/link-card/LinkCard";
import { setLinkToRemove, linkRemove } from "../../../actions/linkActions";

function Links(props) {
	const { links, linkList, linkToRemove, setLinkToRemove, linkRemove } = props;

	useEffect(() => {
		linkList();
	}, [linkList]);

	const confirmDelete = (e) => {
		return linkToRemove ? linkRemove(linkToRemove) : null;
	};

	const cancelDelete = (e) => {
		setLinkToRemove(null);
	};

	const renderLinks = (links) => {
		if (!links) return null;

		return links.map(({ id, ...linkProps }) => {
			const border =
				linkToRemove && linkToRemove.id === id
					? "border border-danger rounded"
					: "border border-transparent m-5";
			return <LinkCard key={id} id={id} {...linkProps} border={border} />;
		});
	};

	return (
		<>
			<Navbar />

			<div className="container container-info shadow-bold">
				<div className="row m-5 mx-5 m-4 pt-5">
					<div className="col ">
						<h1>Links</h1>
					</div>
					<div className="col text-right align-self-bottom">
						<Link to="/manage/links/create" className="btn btn-secondary">
							Add
						</Link>
					</div>
				</div>
				<div className="container align-itens-between">
					{renderLinks(links)}
				</div>
			</div>
			{linkToRemove ? (
				<div className="alert alert-danger rounded float-center shadow-bold m-5">
					<h4 className="alert-heading">Delete Confirmation !</h4>
					<p>Are you sure you want to delete ? this action cannot be undone.</p>
					<hr />
					<div className="d-flex justify-content-between">
						<button onClick={cancelDelete} className="btn btn-outline-light">
							cancel
						</button>
						<button onClick={confirmDelete} className="btn btn-danger">
							delete
						</button>
					</div>
				</div>
			) : null}
		</>
	);
}

const mapStateToprops = (state) => {
	return { links: state.link.links, linkToRemove: state.link.linkToRemove };
};

export default connect(mapStateToprops, {
	linkList,
	setLinkToRemove,
	linkRemove,
})(Links);
