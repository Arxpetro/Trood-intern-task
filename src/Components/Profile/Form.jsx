import React, { useState, useEffect } from "react";

import FormInput from "./ProfileFormInput";
import ImageUploader from "./ImageUploader";

import Pen from "../img/pen.png";
import Save from "../img/save.png";
import Trashbin from "../img/trashbin.png";
import Cross from "../img/cross.png";

import styles from "./styles/Form.module.css";
function Form() {
	// const localData = localStorage.getItem("formData");

	const [FormData, setFormData] = useState({
		name: "",
		lastname: "",
		jobTitle: "",
		phone: "",
		email: "",
		address: "",
		pitch: "",
		visibility: true,
		interests: [],
		potentialInterests: [],
		links: [],
	});
	const [validAll, setValidAll] = useState({
		name: false,
		lastname: false,
		jobTitle: false,
		phone: false,
		email: false,
		address: false,
	});
	// Перевіряємо наявність значення false
	// function hasInvalid() {
	// 	return Object.values(validAll).some((value) => value === false);
	// }
	const validateFormData = (formData) => {
		const { name, lastname, jobTitle, phone, email, address } = formData;

		// Проверка имени (Name)
		if (!name.trim()) {
			alert("Name is required.");
			return false;
		}
		if (name.length < 2 || name.length > 50) {
			alert("Name must be between 2 and 50 characters.");
			return false;
		}
		if (!/^[A-Za-z\s]+$/.test(name)) {
			alert("Name can only contain letters and spaces.");
			return false;
		}

		// Проверка фамилии (Last Name)
		if (!lastname.trim()) {
			alert("Last Name is required.");
			return false;
		}
		if (lastname.length < 2 || lastname.length > 50) {
			alert("Last Name must be between 2 and 50 characters.");
			return false;
		}
		if (!/^[A-Za-z\s]+$/.test(lastname)) {
			alert("Last Name can only contain letters and spaces.");
			return false;
		}

		// Проверка должности (Job Title)
		if (jobTitle.length > 100) {
			alert("Job Title cannot exceed 100 characters.");
			return false;
		}
		if (!/^[A-Za-z0-9\s-]*$/.test(jobTitle)) {
			alert(
				"Job Title can only contain letters, numbers, spaces, and hyphens."
			);
			return false;
		}

		// Проверка телефона (Phone)
		if (!phone.trim()) {
			alert("Phone number is required.");
			return false;
		}
		if (!/^\+\d{10,15}$/.test(phone)) {
			alert(
				"Phone number must start with '+' and contain 10-15 digits (e.g., +79999999999)."
			);
			return false;
		}

		// Проверка email (Email)
		if (!email.trim()) {
			alert("Email is required.");
			return false;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			alert("Please enter a valid email address.");
			return false;
		}

		// Проверка адреса (Address)
		if (address.length > 200) {
			alert("Address cannot exceed 200 characters.");
			return false;
		}
		if (!/^[A-Za-z0-9\s,.-]*$/.test(address)) {
			alert(
				"Address can only contain letters, numbers, commas, periods, hyphens, and spaces."
			);
			return false;
		}

		// Если все поля валидны
		return true;
	};


	
	// Состояние для хранения списка интересов
	const [interests, setInterests] = useState(FormData.interests);
	const [newInterest, setNewInterest] = useState(""); // Состояние для нового интереса
	// Состояние для хранения списка интересов
	const [potentialInterests, setPotentialInterests] = useState(
		FormData.potentialInterests
	);
	const [newPotentialInterest, setNewPotentialInterest] = useState(""); // Состояние для нового интереса
	// Состояние для хранения списка ссылок
	const [links, setLinks] = useState([]); // Массив для хранения ссылок
	const [newLink, setNewLink] = useState({ siteName: "", url: "" }); // Для нового ввода

	// loading formData from localstorage at the first rendering
	useEffect(() => {
		const savedData = localStorage.getItem("FormData");
		if (savedData) {
			const data = JSON.parse(savedData);
			setFormData(data); // Устанавливаем сохранённые данные
			setInterests(data.interests);
			setPotentialInterests(data.potentialInterests);
			setLinks(data.links);
		}
	}, []);

	// X btn / undo redaction of form
	const handleCancelFormEdit = () => {
		if (!isDisabled) {
			const savedData = localStorage.getItem("FormData");
			if (savedData) {
				const data = JSON.parse(savedData);
				setFormData(data); // Устанавливаем сохранённые данные
				setInterests(data.interests);
				setPotentialInterests(data.potentialInterests);
			}
			setIsDisabled(!isDisabled);
		}
	};

	// Обработчик изменений в полях формы
	const handleChange = (event) => {
		const form = event.target;

		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		form.reportValidity();
		//console.log(FormData);
	};

	// Обработчик сохранения данных
	const handleSubmit = (event) => {
		event.preventDefault(); // Предотвращаем перезагрузку страницы
		// Сохраняем данные в Local Storage

		if (!isDisabled && validateFormData(FormData)) {
			localStorage.setItem("FormData", JSON.stringify(FormData));
			setIsDisabled(!isDisabled);
		}
		setNewInterest(""); // if user typed th-g in the interest input
		setNewPotentialInterest("");
		if (isDisabled) {
			setIsDisabled(!isDisabled); // switch form state
		}
	};

	// disable form handle
	const [isDisabled, setIsDisabled] = useState(true);

	// Добавление нового интереса
	const handleAddInterest = (e) => {
		e.preventDefault();
		if (interests.length < 10) {
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
			}
		} else {
			alert("You can't add more then 10 interests");
		}
		setNewInterest("");
	};

	// Удаление интересa
	const handleRemoveInterest = (interest) => {
		// Создаём новый массив с удалённым элементом
		const updatedInterests = interests.filter((item) => item !== interest);
		setInterests(updatedInterests);

		// Обновляем formData с новым массивом интересов
		setFormData((prevData) => ({
			...prevData,
			interests: updatedInterests, // Используем новый массив
		}));

		//console.log("Updated interests:", updatedInterests);
	};

	// Potential Intersts
	// Добавление нового интереса
	const handleAddPotentialInterest = (e) => {
		e.preventDefault();
		if (potentialInterests.length < 10) {
			const trimmedInterest = newPotentialInterest.trim();
			// Проверяем, что интерес не пустой и его ещё нет в списке
			if (trimmedInterest && !potentialInterests.includes(trimmedInterest)) {
				// Создаём обновлённый массив с новым интересом
				const updatedInterests = [...potentialInterests, trimmedInterest];
				setPotentialInterests(updatedInterests);
				// Обновляем formData с новым массивом интересов
				setFormData((prevData) => ({
					...prevData,
					potentialInterests: updatedInterests,
				}));
				// Очищаем поле ввода
			}
		} else {
			alert("You can't add more then 10 interests");
		}
		setNewPotentialInterest("");
	};

	// Удаление интересa
	const handleRemovePotentialInterest = (interest) => {
		// Создаём новый массив с удалённым элементом
		const updatedInterests = potentialInterests.filter(
			(item) => item !== interest
		);
		setPotentialInterests(updatedInterests);

		// Обновляем formData с новым массивом интересов
		setFormData((prevData) => ({
			...prevData,
			potentialInterests: updatedInterests, // Используем новый массив
		}));

		//console.log("Updated interests:", updatedInterests);
	};

	// Добавление новой ссылки
	const handleAddLink = (e) => {
		e.preventDefault();
		if (newLink.siteName.trim() && newLink.url.trim() && links.length < 5) {
			const updatedLinks = [...links, newLink];
			setLinks(updatedLinks);

			setFormData((prevData) => ({
				...prevData,
				links: updatedLinks,
			}));
		}
		setNewLink({ siteName: "", url: "" }); // Сброс полей ввода
	};

	// Удаление ссылки
	const handleRemoveLink = (index) => {
		const updatedLinks = links.filter((_, i) => i !== index);
		setLinks(updatedLinks);
		setFormData((prevData) => ({
			...prevData,
			links: updatedLinks,
		}));
	};

	//
	//
	//
	//
	// return
	//
	//
	//
	//

	return (
		<form className={styles.profileForm} action="" method="get">
			<img
				src={Cross}
				alt=""
				onClick={handleCancelFormEdit}
				style={{
					filter: "invert(1)",
					opacity: isDisabled ? "0" : "1",
					disabled: isDisabled,
					position: "absolute",
					cursor: isDisabled ? "default" : "pointer",
				}}
			/>

			<img
				id={styles.penImg}
				src={isDisabled ? Pen : Save}
				alt="pen_img"
				onClick={handleSubmit}
			/>
			{/* profile picture */}
			<ImageUploader />

			<FormInput
				name="name"
				req
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.name}
				pattern="[a-zA-Zа-яА-ЯёЁ ]+"
				minLength="2"
				title="Name can only contain letters and spaces. Length: between 2 and 50 characters." // Message shown if the input is invalid
			/>
			<FormInput
				name="lastname"
				req
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.lastname}
				pattern="[a-zA-Zа-яА-ЯёЁ ]+"
				minLength="2"
				title="Lastname can only contain letters and spaces. Length: between 2 and 50 characters."
			/>
			<FormInput
				name="jobTitle"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.jobTitle}
				maxLength="100"
				pattern="[a-zA-Zа-яА-ЯёЁ0-9\s]*"
				title="The job title can contain only letters, numbers, and spaces. Maximum length: 100 characters."
			/>
			<FormInput
				name="phone"
				req
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.phone}
				pattern="^\+[0-9]{9,14}$"
				maxLength="15"
				title="The phone number must start with '+', followed by 9 to 14 digits. Example: +79999999999."
			/>
			<FormInput
				name="email"
				type="email"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.email}
				title="Please enter a valid email address (e.g., user@example.com)."
			/>
			<FormInput
				name="address"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.address}
				maxLength="200"
				pattern="[a-zA-Zа-яА-ЯёЁ0-9,.\-\s]*"
				title="The address can contain letters, numbers, commas, periods, dashes, and spaces. Maximum length: 200 characters."
			/>
			<FormInput
				name="pitch"
				isDisabled={isDisabled}
				onChange={handleChange}
				value={FormData.pitch}
				maxLength="200"
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
			<form action="">
				<p className={styles.ProfileFormChapter}>
					The scopes of your interest:
					{/* Добавление нового интереса */}
					{!isDisabled && (
						<>
							<input
								className={styles.interestInput}
								disabled={isDisabled}
								type="text"
								value={newInterest}
								onChange={(e) => setNewInterest(e.target.value)}
								placeholder="Add"
								maxLength="20"
								onSubmit={(event) => {
									event.preventDefault();
									//setNewInterest(event.target.value)
								}}
							/>
							<button
								className={styles.addBtn}
								disabled={isDisabled}
								onClick={handleAddInterest}
							>
								+
							</button>
						</>
					)}
				</p>
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
			</form>

			<form action="">
				<p className={styles.ProfileFormChapter}>
					Potential interests:
					{/* Добавление нового интереса */}
					{!isDisabled && (
						<>
							<input
								className={styles.interestInput}
								disabled={isDisabled}
								type="text"
								value={newPotentialInterest}
								onChange={(e) => setNewPotentialInterest(e.target.value)}
								placeholder="Add"
								maxLength="20"
								onSubmit={(event) => {
									event.preventDefault();
									//setNewInterest(event.target.value)
								}}
							/>
							<button
								type="submit"
								className={styles.addBtn}
								disabled={isDisabled}
								onClick={handleAddPotentialInterest}
							>
								+
							</button>
						</>
					)}
				</p>
				{/* Интересы */}
				<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
					{potentialInterests.map((interest, index) => (
						<div // array on intersts with remove by click
							disabled={isDisabled}
							className={styles.interest}
							key={index}
							onClick={() => {
								if (!isDisabled) {
									handleRemovePotentialInterest(interest);
								}
							}}
						>
							{interest}
						</div>
					))}
				</div>
			</form>
			<form>
				{/* /////////////////////////////////////////////////////////////////// */}
				<p className={styles.ProfileFormChapter}>Your links:</p>
				<div>
					{/*style={{ display: "flex", flexDirection: "column", gap: "10px" }}*/}
					{links.map((link, index) => (
						<div className={styles.linkContainer} key={index}>
							<input
								type="text"
								value={link.siteName}
								disabled
								style={{
									flex: 1,
								}}
							/>
							<input
								type="text"
								value={link.url}
								disabled
								style={{
									flex: 3,
								}}
							/>
							{!isDisabled && (
								<>
									<img
										className={styles.DeleteLinkBtn}
										src={Trashbin}
										alt="Delete"
										onClick={() => handleRemoveLink(index)}
									/>
								</>
							)}
						</div>
					))}
					{!isDisabled && (
						<div className={styles.linkContainer}>
							<input
								type="text"
								value={newLink.siteName}
								placeholder="Site name"
								onChange={(e) =>
									setNewLink({ ...newLink, siteName: e.target.value })
								}
								maxLength="30"
								style={{
									flex: 1,
								}}
							/>
							<input
								type="text"
								value={newLink.url}
								placeholder="Link"
								onChange={(e) =>
									setNewLink({ ...newLink, url: e.target.value })
								}
								maxLength="200"
								style={{
									flex: 3,
								}}
							/>
							<button onClick={handleAddLink}>+</button>
						</div>
					)}
				</div>
			</form>
		</form>
	);
}

export default Form;
