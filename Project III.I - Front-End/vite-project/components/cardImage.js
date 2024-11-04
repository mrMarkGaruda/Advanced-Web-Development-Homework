// components/cardImage.js
export const cardImage = (imgSrc) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card-image");

	const img = new Image();
	img.src = imgSrc;
	img.setAttribute("alt", "User avatar");
	cardDiv.appendChild(img);

	return cardDiv;
};
