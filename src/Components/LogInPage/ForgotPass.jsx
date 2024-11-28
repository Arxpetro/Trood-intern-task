import React from "react";
import Input from "../inputComponents/Input/Input";

import styles from "./styles/ForgotPass.module.css";

function ForgotPass() {
	return (
		<div>
			<h1 className={styles.heading}>Forgot your password</h1>
			<p className={styles.p}>
				Enter your email bellow and we’ll get you back on track
			</p>
			<form action="" method="get">
				<Input title={"Email"} />
				<input
					className={styles.recoverBtn}
					type="submit"
					value="Recover password"
				/>
			</form>
			<p id={styles.backToLigIn}>Back to Log in</p>
		</div>
	);
}

export default ForgotPass;
