import React, { useState } from "react";

import styles from "./styles/Profile.module.css";


import Form from "./Form";
import Test from "./Test";

// images
import LeftArrow from "../img/left_arrow.png";
import MainLogo from "../img/mainlogo.png";
import Widget from "./Widget";


function Profile() {

	
	return (
		<div className={styles.container}>
			<header id={styles.header}>
				<div id={styles.arrowContainer}>
					<img id={styles.arrowImg} src={LeftArrow} alt=" <- " />
				</div>
				<img id={styles.MainLogo} src={MainLogo} alt="TROOD logo" />
				<h1 id={styles.profileNavHeader}>Profile</h1>
			</header>

			<div className={styles.body}>
				<div /* action panel */>
					<h1 className={styles.chapterHeaer}>Projects:</h1>
					<Widget title="Crate project" />

					<h1 className={styles.chapterHeaer}>Tasks:</h1>
					<Widget title="Crate task" />
				</div>


				{/*  PROFILE FORM */}
				<Form/>
			</div>
			<Test />
		</div>
	);
}

export default Profile;
