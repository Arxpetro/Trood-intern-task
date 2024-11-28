// Email input block for Authorization, Registration and ForgotPassword blocks

import React from "react";
import styles from "./Input.module.css";
function Input({
	title = "",
	name = "email",
	type = "email",
	req = true,
	value = "",
	placeholder = "",
}) {
	return (
		<div className={styles.container}>
			<p className={styles.p}>{title}</p>
			<input
				className={styles.textInput}
				type={type}
				name={name}
				required={req}
				value = {value}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default Input;
