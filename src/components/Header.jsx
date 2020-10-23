import React from 'react';

import '../assets/styles/components/Header.scss';

import logo from '../assets/images/logo.png';
import iconUser from '../assets/images/icon_user.svg';

const Header = () => (
	<header>
		<div className="content">
			<div className="flex flex-align-center flex-justify-content-center">
				<img src={logo} id="logo" alt="logo" />
				<ul id="menu1">
					<li>
						APPLICATION
					</li>
					<li>
						SEARCH
					</li>
				</ul>

				<div id="menu2">
					<div className="flex flex-align-center flex-justify-content-center">
						<ul>
							<li>
								APPLICATION
							</li>
							<li>
								SEARCH
							</li>
						</ul>
						<div id="user" className="flex">
							<div id="triangle">

							</div>
							<div id="text" className="flex flex-align-center">
								<img src={iconUser} alt="iconUser" />
								ADMIN
								<div className="triangle_down"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;