// main registration/login block

import React from "react";

import styles from "./styles/MainWindow.module.css";

import MainLogo from "../img/mainlogo.png";

import Registration from "./Registration";
import Authorization from "./Authorization";
import ForgotPass from "./ForgotPass";
import SetNewPass from "./SetNewPass";

function MainWindow() {
	return (
		<div>
			<img id={styles.MainLogo} src={MainLogo} alt="logo" />
			<div
				className={styles.MainBlock} //     main block
			>
				{/* <Authorization/> */}
				{/* <Registration/> */}
				{/* <ForgotPass/> */}
				<SetNewPass />
			</div>
		</div>
	);
}

export default MainWindow;
