import React from "react";

import styles from "./styles/ProfileFormInput.module.css";

function FormInput({
	name = "",
	type = "text",
	value = "",
	placeholder = "",
	req = false,
	isDisabled = true,
	onChange,
	maxLength = '50',
	minLength="0",
	pattern, // Allows only letters (Latin and Cyrillic) and spaces
	title,
	onload,
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
				maxLength={maxLength}
				minLength={minLength}
				pattern={pattern}
				title={title}
				onLoad={onload}
			/>
		</div>
	);
}

export default FormInput;
