import React, { useState } from "react";

// Путь к картинке мусорного бака
import Trashbin from "../img/trashbin.png";

const LinkInput = ({ isDisabled, FormData, SetFormData }) => {
  const [links, setLinks] = useState([]); // Массив для хранения ссылок
  const [newLink, setNewLink] = useState({ siteName: "", url: "" }); // Для нового ввода

  // Добавление новой ссылки
  const handleAddLink = () => {
    if (newLink.siteName.trim() && newLink.url.trim()) {
      setLinks([...links, newLink]);
      setNewLink({ siteName: "", url: "" }); // Сброс полей ввода
    }
  };

  // Удаление ссылки
  const handleRemoveLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p>Your links:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map((link, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input
              type="text"
              value={link.siteName}
              disabled
              style={{
                flex: 1,
                border: "1px solid gray",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            <input
              type="text"
              value={link.url}
              disabled
              style={{
                flex: 3,
                border: "1px solid gray",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            <img
              src={Trashbin}
              alt="Delete"
              style={{ cursor: "pointer", width: "20px", height: "20px" }}
              onClick={() => handleRemoveLink(index)}
            />
          </div>
        ))}
        {!isDisabled && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="text"
              value={newLink.siteName}
              placeholder="Site name"
              onChange={(e) =>
                setNewLink({ ...newLink, siteName: e.target.value })
              }
              style={{
                flex: 1,
                border: "1px solid gray",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            <input
              type="text"
              value={newLink.url}
              placeholder="Link"
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              style={{
                flex: 3,
                border: "1px solid gray",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            <button
              onClick={handleAddLink}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "blue",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkInput;
