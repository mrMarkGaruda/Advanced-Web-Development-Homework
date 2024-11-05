// formComp.js
import "./formComp.css";
import { inputComp } from "./inputComp";
import { updateUser } from "../utils/updateUser";
import { fetchUsers } from "../utils/fetchData";
import { handleData } from "../utils/handleData";

export const formComp = (userId) => {
	const form = document.createElement("form");
	form.classList.add("form");

	form.appendChild(inputComp("text", "firstName", "First Name", "John"));  // Placeholder values
	form.appendChild(inputComp("text", "lastName", "Last Name", "Doe"));

	const submitBtn = document.createElement("button");
	submitBtn.setAttribute("type", "submit");
	submitBtn.innerText = "Submit";

	form.appendChild(submitBtn);

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		const updatedFirstName = document.getElementById("firstName").value;
		const updatedLastName = document.getElementById("lastName").value;
		await updateUser(updatedFirstName, updatedLastName, userId);

		const usersArray = await fetchUsers();
		handleData(usersArray);
		document.querySelector(".modal-overlay").classList.remove("show");
	});

	return form;
};
