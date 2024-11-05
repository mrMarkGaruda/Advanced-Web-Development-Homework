// cardImage.js
import "./cardImage.css";

export const cardImage = (cardImg) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card-image");

	const img = new Image();
	img.src = cardImg || "https://path-to-default-image.jpg";  // Default if no image is provided
	img.alt = "User avatar";

	cardDiv.appendChild(img);
	return cardDiv;
};
