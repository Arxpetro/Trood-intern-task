// Password input element for Authorization and Registration blocks

import React, { useState } from "react";
import EyeImg from "../../img/eye.png";

import styles from "./PasswordInput.module.css";

function PasswordInput() {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<p>Password</p>
			<div className={styles.passwordInput}>
				<input
					className={styles.input}
					type={showPassword ? "text" : "password"}
					id="passwordInput"
				/>

				<img id={styles.eyeImg}
					src={EyeImg}
					alt="o"
					onClick={handleTogglePassword}
				/>
			</div>
		</div>
	);
}

export default PasswordInput;
