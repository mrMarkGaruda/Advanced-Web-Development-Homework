// modalComp.js
import "./modalComp.css";

export const modalComp = (titleText = "User Information") => {
	const modalOverlay = document.createElement("div");
	modalOverlay.classList.add("modal-overlay");

	const modalContent = document.createElement("div");
	modalContent.classList.add("modal-content");
	const modalHeader = document.createElement("header");
	const closeBtn = document.createElement("button");
	closeBtn.classList.add("btn-close");
	closeBtn.innerText = "X";
	closeBtn.onclick = () => modalOverlay.classList.remove("show");

	const title = document.createElement("h2");
	title.innerText = titleText;

	modalHeader.appendChild(closeBtn);
	modalHeader.appendChild(title);
	modalContent.appendChild(modalHeader);

	modalOverlay.appendChild(modalContent);
	return modalOverlay;
};
