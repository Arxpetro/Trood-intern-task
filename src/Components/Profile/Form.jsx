import React, { useState, useEffect } from "react";

import FormInput from "./ProfileFormInput";

import Pen from "../img/pen.png";
import Save from "../img/save.png";
import NoPFP from "../img/profile_picture_EMPTY.png";

import styles from "./styles/Form.module.css";
function Form() {
	// const localData = localStorage.getItem("formData");

	const [FormData, setFormData] = useState({
		name: "Petro",
		lastname: "",
		jobTitle: "",
		phone: "",
		email: "",
		address: "",
		pitch: "",
		visibility: true,
		interests: [],
		potentialIntersts: [],
		links: [],
	});
	// Состояние для хранения списка интересов
	const [interests, setInterests] = useState(FormData.interests);
	const [newInterest, setNewInterest] = useState(""); // Состояние для нового интереса

	// loading formData from localstorage at the first rendering
	useEffect(() => {
		const savedData = localStorage.getItem("FormData");
		if (savedData) {
			const data = JSON.parse(savedData);
			setFormData(data); // Устанавливаем сохранённые данные
			setInterests(data.interests);
		}
	}, []);

	// Обработчик изменений в полях формы
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log(FormData);
	};

	// Обработчик сохранения данных
	const handleSubmit = (event) => {
		event.preventDefault(); // Предотвращаем перезагрузку страницы
		// Сохраняем данные в Local Storage

		if (!isDisabled) {
			localStorage.setItem("FormData", JSON.stringify(FormData));
		}
		setIsDisabled(!isDisabled); // switch form state
	};

	// disable form handle
	const [isDisabled, setIsDisabled] = useState(true);

	// Добавление нового интереса
	const handleAddInterest = (e) => {
		e.preventDefault();
		const trimmedInterest = newInterest.trim();
	  
		// Проверяем, что интерес не пустой и его ещё нет в списке
		if (trimmedInterest && !interests.includes(trimmedInterest)) {
		  // Создаём обновлённый массив с новым интересом
		  const updatedInterests = [...interests, trimmedInterest];
		  setInterests(updatedInterests);
	  
		  // Обновляем formData с новым массивом интересов
		  setFormData((prevData) => ({
			...prevData,
			interests: updatedInterests,
		  }));
	  
		  // Очищаем поле ввода
		  setNewInterest("");
		}
	};

	// Удаление интереса
	const handleRemoveInterest = (interest) => {
		// Создаём новый массив с удалённым элементом
		const updatedInterests = interests.filter((item) => item !== interest);
		setInterests(updatedInterests);
	  
		// Обновляем formData с новым массивом интересов
		setFormData((prevData) => ({
		  ...prevData,
		  interests: updatedInterests, // Используем новый массив
		}));
	  
		console.log("Updated interests:", updatedInterests);
	};


	return (
		<form className={styles.profileForm} action="" method="get">
			<img
				id={styles.penImg}
				src={isDisabled ? Pen : Save}
				alt="pen_img"
				onClick={handleSubmit}
			/>
			<div className={styles.pfpContainer}>
				<img src={NoPFP} alt="PFP" id={styles.noPfp} disabled={isDisabled} />
			</div>
			<FormInput
				name="name"
				req
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.name}
			/>
			<FormInput
				name="lastname"
				req
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.lastname}
			/>
			<FormInput
				name="jobTitle"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.jobTitle}
			/>
			<FormInput
				name="phone"
				req
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.phone}
			/>
			<FormInput
				name="email"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.email}
			/>
			<FormInput
				name="address"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.address}
			/>
			<FormInput
				name="pitch"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.pitch}
			/>

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
						checked={FormData.visibility === "Private"}
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
						checked={FormData.visibility === "Public"}
						onChange={handleChange}
					/>
					Public
				</label>
			</div>
			{/*///////////////////////////////////////////////////////////////////*/}

			<div
				style={{
					display: "flex",
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
							<div // array on intersts with remove by click
								disabled={isDisabled}
								className={styles.interest}
								key={index}
								onClick={() => {
									if (!isDisabled) {
										handleRemoveInterest(interest);
									}
								}}
							>
								{interest}
							</div>
						))}
					</div>
					{/* Добавление нового интереса */}
					<div>
						<input
							disabled={isDisabled}
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
							onSubmit={(event) => {
								event.preventDefault();
								//setNewInterest(event.target.value)
							}}
						/>
						<button
							disabled={isDisabled}
							
							onClick={handleAddInterest}
							style={{
								background: "none",
								border: "none",
								color: "#3888E7",
								fontSize: "2em",
								lineHeight: "1rem",
							}}
						>
							+
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
