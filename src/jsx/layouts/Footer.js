import React from "react";

const Footer = () => {
	var d = new Date();
	return (
		<div className="footer">
			<div className="copyright border-top">
				<p>Copyright © Designed &amp; Developed by{" "}
					<a href="http://youtube.com/" target="_blank" rel="noreferrer">
						Code Titans
					</a>{" "}
					{d.getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default Footer;
