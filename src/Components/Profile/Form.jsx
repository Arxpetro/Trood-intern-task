import React, { useState } from "react";

import FormInput from "./ProfileFormInput";

import Pen from "../img/pen.png";
import Save from "../img/save.png";
import NoPFP from "../img/profile_picture_EMPTY.png";

import styles from "./styles/Form.module.css";
function Form() {
    const localData = localStorage.getItem("formData");
	const [FormData, setFormData] = useState(localData ?? {
		firstName: "",
		lastName: "",
		jobTitle: "",
		phone: "",
		email: "",
		address: "",
		pitch: "",
		isPrivate: true,
		interests: [],
		potentialIntersts: [],
		links: [],
	});
      // Обработчик изменений в полях формы
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

	// disable form handle
	const [isDisabled, setIsDisabled] = useState(true);
	const toggleFormState = () => {
		setIsDisabled(!isDisabled);
	};

	// Public/Private profile handle
	// const [visibility, setVisibility] = useState("Private");
	// const handleChange = (event) => {
	// 	setVisibility(event.target.value);
	// };

	// Состояние для хранения списка интересов
	const [interests, setInterests] = useState([]);
	const [newInterest, setNewInterest] = useState(""); // Состояние для нового интереса

	// Добавление нового интереса
	const handleAddInterest = () => {
		if (newInterest.trim() && !interests.includes(newInterest.trim())) {
			setInterests([...interests, newInterest.trim()]);
            setFormData([...FormData, interests]); // set new interest in formData
			setNewInterest(""); // Очищаем поле ввода
		}
	};

	// Удаление интереса
	const handleRemoveInterest = (interest) => {
		setInterests(interests.filter((item) => item !== interest));
        setFormData([...FormData, interests]); // set new interest in formData
	};
	return (
		<form className={styles.profileForm} action="" method="get">
			<img
				id={styles.penImg}
				src={isDisabled ? Pen : Save}
				alt="pen_img"
				onClick={toggleFormState}
			/>
			<div className={styles.pfpContainer}>
				<img src={NoPFP} alt="PFP" id={styles.noPfp} disabled={isDisabled} />
			</div>
			<FormInput name="Name" req isDisabled={isDisabled} onChange={handleChange}/>
			<FormInput name="Lastname" req isDisabled={isDisabled} onChange={handleChange}/>
			<FormInput name="Job Title" isDisabled={isDisabled} onChange={handleChange}/>
			<FormInput name="Phone" req isDisabled={isDisabled} onChange={handleChange}/>
			<FormInput name="Email" isDisabled={isDisabled} onChange={handleChange}/>
			<FormInput name="Address" isDisabled={isDisabled} onChange={handleChange}/>
			<FormInput name="Pitch" isDisabled={isDisabled} onChange={handleChange}/>

			<p className={styles.ProfileFormChapter}>
				Show your profile in Launchpad?
			</p>
			{/* Radio Input Private/Public */}
			<div className={styles.RadioInputContainer}>
				{/* option Private */}
				<label className={styles.label}>
					<input
						disabled={isDisabled}
						className={styles.RadioInput}
						type="radio"
						name="visibility"
						value="Private"
						//checked={visibility === "Private"}
						onChange={handleChange}
					/>
					Private
				</label>

				{/* option Public */}
				<label className={styles.label}>
					<input
						disabled={isDisabled}
						className={styles.RadioInput}
						type="radio"
						name="visibility"
						value="Public"
						//checked={visibility === "Public"}
						onChange={handleChange}
					/>
					Public
				</label>
			</div>
{/*///////////////////////////////////////////////////////////////////*/}
			
			
			<div
				style={{
					display: "flex"
				}}
			>
				<p className={styles.ProfileFormChapter}>
				The scopes of your interest:
			</p>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px",
					}}
				>
					{/* Интересы */}
					<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
						{interests.map((interest, index) => (
							<div
								key={index}
								onClick={() => handleRemoveInterest(interest)}
								style={{
									padding: "5px 10px",
									border: "1px solid #333",
									borderRadius: "20px",
									backgroundColor: "transparent",
									cursor: "pointer",
									display: "inline-flex",
									alignItems: "center",
								}}
							>
								{interest}
							</div>
						))}
					</div>
					{/* Добавление нового интереса */}
					<div >
						<input
							type="text"
							value={newInterest}
							onChange={(e) => setNewInterest(e.target.value)}
							placeholder="Add"
							style={{
                                width: "4rem",
                                backgroundColor: "transparent",
								padding: "0.4rem",
								
								border: "1px solid",
								outline: "none",
							}}
						/>
						<button
							onClick={handleAddInterest}
							style={{
								background: "none",
								border: "none",
								color: "#3888E7",
								fontSize: "2em",
                                lineHeight: "1rem",
								cursor: "pointer",
							}}
						>
							<p>+</p>
						</button>
					</div>
				</div>
			</div>
			<p className={styles.ProfileFormChapter}>Potential interests: + </p>
			<p className={styles.ProfileFormChapter}>Your links: +</p>
		</form>
	);
}

export default Form;
