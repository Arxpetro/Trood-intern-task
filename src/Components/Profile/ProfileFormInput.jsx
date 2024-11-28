import React from "react";

import styles from "./styles/ProfileFormInput.module.css";

function FormInput({
	name = "",
	type = "text",
	value = "",
	placeholder = "",
	req = false,
	isDisabled = true,
	onChange
}) {
	return (
		<div>
			<input
				disabled={isDisabled}
				className={styles.textInput}
				type={type}
				name={name}
				value={value}
				required={req}
				placeholder={placeholder ? placeholder : name}
				onChange={onChange}
			/>
		</div>
	);
}

export default FormInput;
