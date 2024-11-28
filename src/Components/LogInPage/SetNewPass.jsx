import React from "react";
import Input from "../inputComponents/Input/Input";

import styles from "./styles/SetNewPass.module.css";
function SetNewPass() {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Set your new password</h1>
			<form action="" method="get">
				<Input title={"New password"} />

				<input
					className={styles.SetNewPass}
					type="submit"
					value="Set your new password"
				/>
			</form>
		</div>
	);
}

export default SetNewPass;
