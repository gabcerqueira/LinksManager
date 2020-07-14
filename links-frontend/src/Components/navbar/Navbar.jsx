import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-primary text-light">
			<div className="container d-flex w-100 justify content-around">
				<div>
					<span>
						<i class="fas fa-arrow-left fa-2x">BACK</i>
					</span>
				</div>

				<div>
					<span>
						<i class="fab fa-staylinked fa-3x text-white">LinkIn</i>
					</span>
				</div>

				<div>
					<span>
						<i class="fas fa-sign-out-alt fa-2x text-white">EXIT</i>
					</span>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
