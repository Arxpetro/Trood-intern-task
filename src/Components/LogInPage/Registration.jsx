import React from "react";
import Input from "../inputComponents/Input/Input";
import PasswordInput from "../inputComponents/Password/PasswordInput";

import styles from "./styles/Registration.module.css";

function Registration() {
	return (
		<div>
			<h1 className={styles.heading}>Registration</h1>
			<form action="" method="get">
				<div>
					<Input title={"Email"} />
				</div>
				<div>
					<PasswordInput />
				</div>
				<button className={styles.SignUpBtn}>Sign up</button>
			</form>
		</div>
	);
}

export default Registration;
