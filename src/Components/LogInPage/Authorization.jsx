// Authorization content for main block

import React from "react";
import Input from "../inputComponents/Input/Input";
import PasswordInput from "../inputComponents/Password/PasswordInput";

import styles from "./styles/Authorization.module.css";

function Authorization() {
	return (
		<div>
			<h1 className={styles.heading}>Authorization</h1>
			<form action="" method="get">
				<div>
					<Input title={"Email"} />
				</div>
				<div>
					<PasswordInput />
				</div>
				<div className={styles.buttons}>
					<input className={styles.logInBtn} type="submit" value="Log in" />
					<button className={styles.SignUpBtn}>Sign up</button>
				</div>
			</form>

			<p id={styles.forgotPassword}>Forgot password</p>
		</div>
	);
}

export default Authorization;
