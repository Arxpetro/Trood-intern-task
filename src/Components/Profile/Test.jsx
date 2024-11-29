import React, { useState, useEffect } from "react";

function Test() {
	// // Состояние для хранения списка интересов
	// const [interests, setInterests] = useState([]);
	// const [newInterest, setNewInterest] = useState(""); // Состояние для нового интереса

	// // Добавление нового интереса
	// const handleAddInterest = () => {
	//   if (newInterest.trim() && !interests.includes(newInterest.trim())) {
	//     setInterests([...interests, newInterest.trim()]);
	//     setNewInterest(""); // Очищаем поле ввода
	//   }
	// };

	// // Удаление интереса
	// const handleRemoveInterest = (interest) => {
	//   setInterests(interests.filter((item) => item !== interest));
	// };

	// return (
	//   <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#e6f3ff" }}>
	//     <h3>The scopes of your interest:</h3>
	//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
	//       {/* Интересы */}
	//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
	//         {interests.map((interest, index) => (
	//           <div
	//             key={index}
	//             onClick={() => handleRemoveInterest(interest)}
	//             style={{
	//               padding: "5px 10px",
	//               border: "1px solid #333",
	//               borderRadius: "20px",
	//               backgroundColor: "#fff",
	//               cursor: "pointer",
	//               display: "inline-flex",
	//               alignItems: "center",
	//             }}
	//           >
	//             {interest}
	//           </div>
	//         ))}
	//       </div>
	//       {/* Добавление нового интереса */}
	//       <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
	//         <input
	//           type="text"
	//           value={newInterest}
	//           onChange={(e) => setNewInterest(e.target.value)}
	//           placeholder="Add interest"
	//           style={{
	//             padding: "5px",
	//             borderRadius: "5px",
	//             border: "1px solid #ccc",
	//             outline: "none",
	//           }}
	//         />
	//         <button
	//           onClick={handleAddInterest}
	//           style={{
	//             background: "none",
	//             border: "none",
	//             color: "#007bff",
	//             fontSize: "20px",
	//             cursor: "pointer",
	//           }}
	//         >
	//           +
	//         </button>
	//       </div>
	//     </div>
	//   </div>
	// );
	///////////////////////////////////////////////////
	// Состояние для хранения данных формы
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	// Обработчик изменений в полях формы
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Обработчик сохранения данных
	const handleSubmit = (event) => {
		event.preventDefault(); // Предотвращаем перезагрузку страницы
		// Сохраняем данные в Local Storage
		localStorage.setItem("formData", JSON.stringify(formData));
		
	};

	// loading formData from localstorage at the first rendering
	useEffect(() => {
	    const savedData = localStorage.getItem("formData");
	    if (savedData) {
	      setFormData(JSON.parse(savedData)); // Устанавливаем сохранённые данные
	    }
	}, []);

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h3>Форма для сохранения данных в Local Storage</h3>
			<form
				onSubmit={handleSubmit}
				style={{ display: "inline-block", textAlign: "left" }}
			>
				<div style={{ marginBottom: "10px" }}>
					<label>
						Имя: <br />
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							placeholder="Введите имя"
							required
							style={{
								width: "300px",
								padding: "8px",
								borderRadius: "5px",
								border: "1px solid #ccc",
							}}
						/>
					</label>
				</div>
				<div style={{ marginBottom: "10px" }}>
					<label>
						Фамилия: <br />
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							placeholder="Введите фамилию"
							required
							style={{
								width: "300px",
								padding: "8px",
								borderRadius: "5px",
								border: "1px solid #ccc",
							}}
						/>
					</label>
				</div>
				<div style={{ marginBottom: "20px" }}>
					<label>
						Email: <br />
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Введите email"
							required
							style={{
								width: "300px",
								padding: "8px",
								borderRadius: "5px",
								border: "1px solid #ccc",
							}}
						/>
					</label>
				</div>
				<button
					type="submit"
					style={{
						padding: "10px 20px",
						backgroundColor: "#4CAF50",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}
				>
					Сохранить
				</button>
			</form>
		</div>
	);
}

export default Test;
