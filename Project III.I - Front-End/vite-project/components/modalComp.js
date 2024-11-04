// components/modalComp.js
import "./modalComp.css";

export const modalComp = () => {
	const modalOverlay = document.createElement("div");
	modalOverlay.classList.add("modal-overlay");

	const modalContent = document.createElement("div");
	modalContent.classList.add("modal-content");

	const closeBtn = document.createElement("button");
	closeBtn.innerText = "X";
	closeBtn.addEventListener("click", () => {
		modalOverlay.classList.remove("show");
	});

	modalContent.appendChild(closeBtn);
	modalOverlay.appendChild(modalContent);

	document.body.appendChild(modalOverlay);
	return modalOverlay;
};
