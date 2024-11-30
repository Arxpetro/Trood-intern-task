import React, { useState, useEffect } from "react";
import NoPFP from "../img/profile_picture_EMPTY.png";

const ImageUploader = () => {
	const [imageSrc, setImageSrc] = useState(null);
	// const [error, setError] = useState(null);

	// Загружаем картинку из localStorage при загрузке страницы
	useEffect(() => {
		const storedImage = localStorage.getItem("uploadedImage");
		if (storedImage) {
			setImageSrc(storedImage);
		}
	}, []);

	const handleDivClick = () => {
		// Создаём скрытый input для выбора файла
		const input = document.createElement("input");
		input.type = "file";
		input.accept = ".jpg,.jpeg,.png"; // Ограничиваем форматы
		input.onchange = (event) => {
			const file = event.target.files[0];
			if (file) {
				// Проверяем размер файла
				if (file.size > 5 * 1024 * 1024) {
					// 5 MB
					alert("Файл слишком большой. Максимальный размер: 5 MB.");
					return;
				}

				// Проверяем формат файла
				const allowedFormats = ["image/jpeg", "image/png"];
				if (!allowedFormats.includes(file.type)) {
					alert("Неподдерживаемый формат. Поддерживаются только .jpg, .jpeg, .png.");
					return;
				}

				// Если проверки пройдены, загружаем изображение
				const reader = new FileReader();
				reader.onload = () => {
					const imageData = reader.result;
					setImageSrc(imageData); // Устанавливаем картинку в состояние
					localStorage.setItem("uploadedImage", imageData); // Сохраняем в localStorage
					//setError(null); // Очищаем ошибки
				};
				reader.readAsDataURL(file); // Читаем файл как Data URL
			}
		};
		input.click(); // Программно вызываем клик на input
	};

	return (
		<div
			onClick={handleDivClick}
			style={{
				margin: "3em auto 1em",
				width: "5.625em",
				height: "5.625em",
				border: "none",
				borderRadius: "50%",
				backgroundImage: `url(${imageSrc})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
                backgroundColor:'#D9D9D9',
			}}
		>
			{!imageSrc && (<img src={NoPFP} alt="PFP" style={{width: "1.8em", opacity: "0.5"}}/>)}
		</div>
	);
};

export default ImageUploader;
