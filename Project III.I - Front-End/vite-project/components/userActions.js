// userActions.js
import "./userActions.css";
import { actionButton } from "./actionButton";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/trash.svg";
import { formComp } from "./formComp";
import { deleteUser } from "../utils/deleteUser";

export const usersActions = (userId) => {
	const actionsContainer = document.createElement("div");
	actionsContainer.classList.add("actions-container");

	const editButton = actionButton(editIcon, "warning-btn", () => {
		const modal = document.querySelector(".modal-overlay");
		modal.innerHTML = "";  // Clear previous content
		modal.appendChild(formComp(userId));
		modal.classList.add("show");
	});

	const deleteButton = actionButton(deleteIcon, "danger-btn", async () => {
		await deleteUser(userId);
		document.getElementById("app").innerHTML = "User deleted successfully.";
	});

	actionsContainer.appendChild(editButton);
	actionsContainer.appendChild(deleteButton);
	return actionsContainer;
};
