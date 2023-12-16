import React from "react";

const PageTitle = ({ motherMenu, activeMenu, pageContent }) => {
	let path = window.location.pathname.split("/");

	return (
		<div className="row page-titles mx-0">
			<ol className="breadcrumb">
				<li className="breadcrumb-item active">{motherMenu}</li>
				<li className="breadcrumb-item">{activeMenu}</li>
			</ol>
		</div>
	);
};

export default PageTitle;
